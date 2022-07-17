<template>
  <div class="Wrapper">
    <div class="Text">NCHU_200hub</div>
    <div class="ContentWrapper">
      <div class="description">
        <div class="spring">多少游春意 🔥</div>
        <div class="intersting">
          Something <br />
          Interesting
        </div>
        <div class="poem">
          <div class="poemText">寸心誓与长相守</div>
          <div class="poemText">止华凄冷蓼花愁</div>
          <div class="poemText">挑尽寒灯到夜深</div>
          <div class="poemText">战和何者是良筹</div>
        </div>
        <div class="HomeButtonWrapper">
          <HomeButton
            :isColorReversed="false"
            description="让我康康"
            where="/video"
          />
          <HomeButton
            :isColorReversed="true"
            description="关于我们"
            where="/about"
          />
        </div>
      </div>
      <TeamAll :url="cartoonUrls[0].teamCard.url" />
    </div>
    <div class="CardsWrapper">
      <div class="cardTitle">TEAM sofar...</div>
      <div class="Cards">
        <CartoonCard
          v-for="(card, index) in cartoonUrls[0].cartoonCardsCollection.items"
          :key="index"
          :url="card.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeButton from "../button/HomeButton.vue";
import CartoonCard from "@/components/cards/CartoonCard.vue";
import TeamAll from "@/components/illustrations/TeamAll.vue";
export default {
  components: {
    HomeButton,
    CartoonCard,
    TeamAll,
  },
  data() {
    return {
      cartoonUrls: [],
    };
  },
  async created() {
    this.cartoonUrls = await this.getcartoonUrl();
    console.log(this.cartoonUrls);
  },
  methods: {
    getcartoonUrl: async () => {
      const query = `{
        nchu200HubCollection {
          items{
            cartoonCardsCollection{
              items{
                url
              }
            }
            teamCard{
              url
            }
          }
        }
      }`;
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}/`;

      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      };

      try {
        const response = await fetch(fetchUrl, fetchOptions).then((response) =>
          response.json()
        );
        return response.data.nchu200HubCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@keyframes Op {
  from {
    opacity: 0;
    transform: translateY(-10px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
    filter: blur(0px);
  }
}
.Wrapper {
  padding: 40px;
  @media (max-width: 900px) {
    padding: 20px;
  }

  .Text {
    font-family: "HanziPen SC";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #030f26;
    animation: Op 1s forwards;
    opacity: 0;
    animation-delay: 1.6s;
    @media (max-width: 900px) {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }
  }

  .ContentWrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    margin-top: 10vh;
    padding-left: 5vw;
    position: relative;
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 130px);
    }

    .description {
      display: grid;
      grid-template-rows: repeat(4, auto);
      padding-top: 5vh;
      gap: 5vh;
      justify-items: start;
      align-items: center;

      opacity: 0;
      animation: Op 1s forwards;
      .spring {
        font-family: "HanziPen SC";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #ffffff;
        padding: 15px 10px;
        text-align: center;
        background: #090017;
        border-radius: 29px;
        animation: Op 1s forwards;
        opacity: 0;
        animation-delay: 0.2s;
      }

      .intersting {
        font-family: "Cascadia Code";
        font-style: normal;
        font-weight: 700;
        font-size: 58px;
        line-height: 58px;
        color: #030f26;
        animation: Op 1s forwards;
        animation-delay: 0.4s;
        opacity: 0;
        @media (max-width: 900px) {
          font-size: 30px;
        }
      }

      .poem {
        opacity: 0;
        background: rgba(15, 14, 71, 0.3);
        border: 0.5px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(40px);
        border-radius: 20px;
        padding: 30px;
        @media (max-width: 900px) {
          overflow-x: hidden;
        }

        text-align: center;
        animation: Op 1s forwards;
        animation-delay: 0.6s;
        @media (max-width: 900px) {
          padding: 10px;
        }

        .poemText {
          font-family: "HanziPen SC";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 46px;
          color: #030f26;
          &:hover {
            cursor: defalut;
            transform: translateX(20px);
          }
          @media (max-width: 900px) {
            font-size: 10px;
          }
        }
      }

      .HomeButtonWrapper {
        display: grid;
        grid-template-columns: auto auto;
        gap: 50px;
        animation: Op 1s forwards;
        animation-delay: 0.8s;
        opacity: 0;
        @media (max-width: 900px) {
          grid-template-columns: auto;
          grid-template-rows: auto auto;
        }
      }
    }
  }

  .CardsWrapper {
    margin-top: 10vh;
    padding-left: 5vw;
    animation: Op 1s forwards;
    animation-delay: 1s;
    opacity: 0;
    .cardTitle {
      font-family: "Cascadia Code";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 58px;
      letter-spacing: 0.5px;
      color: #030f26;
      @media (max-width: 900px) {
        font-size: 20px;
      }
    }
    .Cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      justify-items: center;
      @media (max-width: 900px) {
        grid-template-rows: repeat(4, auto);
        grid-template-columns: auto;
      }
    }
  }
}
</style>
