<template>
  <div class="videoWrapper">
    <ShowCard :isOnComputer="isOnComputer" />
    <DescriptionVideo text="popular" />
    <div class="centerCards">
      <div class="CardsWrapper">
        <div class="leftCard">
          <CardDescriptions text="ms.marvel" class="cardDescription" />
          <CardDescriptions text="1/6" class="right" />
          <img class="left" src="@/assets/img/leftCardtext.png" alt="imgtext" />
          <img class="star" src="@/assets/icons/star.svg" alt="star" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowCard from "@/components/cards/moviecards/ShowCard.vue";
import DescriptionVideo from "@/components/cards/moviecards/DescriptionVideo.vue";
import CardDescriptions from "@/components/cards/moviecards/CardDescriptions.vue";
export default {
  components: {
    ShowCard,
    DescriptionVideo,
    CardDescriptions,
  },
  props: ["isOnComputer"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";
.videoWrapper {
  overflow-x: auto;
  @include gridRowsCenter(3);
  justify-items: start;
  padding: 40px;
  @media (max-width: 900px) {
    padding: 20px;
  }
  .centerCards {
    padding-top: 60px;
    @media (max-width: 900px) {
      padding-top: 40px;
    }
    display: grid;
    grid-template-rows: auto auto;
  }
  .CardsWrapper {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;
    gap: 30px;
    .leftCard {
      position: relative;
      cursor: pointer;
      &:hover {
        transform: translateY(-10px) scale(1.05);
      }
      .left {
        width: 420px;
        @media (max-width: 900px) {
          width: 200px;
        }
      }
      .cardDescription {
        bottom: 10px;
      }
      .star {
        position: absolute;
        width: 50px;
        top: 20px;
        left: 20px;
        @media (max-width: 900px) {
          width: 20px;
        }
      }
      .right {
        right: 10px;
        bottom: 10px;
      }
    }
  }
}
</style>
