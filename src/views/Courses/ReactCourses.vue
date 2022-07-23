<template>
  <div class="reactC">
    <Header />
    <div class="backgroundWrap">
      <div @click="prevPage">
        <ChangePage
          :url="require('@/assets/icons/previous_page.svg')"
          class="prevPage"
        />
      </div>
      <div @click="nextPage">
        <ChangePage
          :url="require('@/assets/icons/next_page.svg')"
          class="nextPage"
        />
      </div>
      <div class="Background"></div>
      <img
        class="waves"
        :src="
          require('@/assets/waves/certificate-wave' + this.randomWave5 + '.svg')
        "
        style="top: 100px; filter: blur(60px)"
      />
      <img
        class="waves"
        :src="require('@/assets/waves/hero-wave' + this.randomWave3 + '.svg')"
        style="top: 350px"
      />
      <img
        class="waves"
        :src="
          require('@/assets/waves/testimonial-wave' + this.randomWave5 + '.svg')
        "
        style="top: 550px"
      />
      <img
        class="waves"
        src="@/assets/waves/certificate-lines.svg"
        style="top: 550px"
      />
    </div>
    <div class="CourseWrapper">
      <div class="CourseHeroWrapper">
        <img
          :src="contents[index].illustration.url"
          :alt="url"
          class="Illustration"
        />
        <h1
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
          class="Title"
        >
          {{ contents[index].title }}
        </h1>
        <p
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
          class="Description"
        >
          {{ contents[index].description }}
        </p>
        <PurchaseButton v-show="!isPro" style="margin: 40px" />
      </div>
    </div>
    <div class="Coding">
      <markdown-it-vue
        :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        v-show="isPro"
        :content="contents[index].content"
      />
    </div>
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";

import Header from "@/components/Headers/Header.vue";
import PurchaseButton from "@/components/button/PurchaseButton.vue";
import ChangePage from "@/components/button/ChangePage.vue";

export default {
  async created() {
    this.contents = await this.getcartoonUrl();
    // console.log(this.contents);
    const query = this.$route.query;
    this.index = query.index;
    if (sessionStorage.getItem("email") !== null) {
      this.isPro = true;
    }
    if (this.index == 0) {
      this.leftPageButton_show = false;
    }
    if (this.index == this.contents.length) {
      this.rightPageButton_show = false;
    }
    this.randomWave3 = Math.floor(Math.random() * 3 + 1);
    this.randomWave5 = Math.floor(Math.random() * 5 + 1);
  },
  components: { MarkdownItVue, Header, PurchaseButton, ChangePage },
  data() {
    return {
      contents: [],
      index: 0,
      isPro: false,
      randomWave3: 1,
      randomWave5: 1,
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    prevPage() {
      if (this.index !== 0) {
        this.index--;
      }
    },
    nextPage() {
      if (this.index < this.contents.length - 1) {
        this.index++;
      }
    },
    getcartoonUrl: async () => {
      const query = `{
        advancedReactCollection{
          items{
            illustration{
              url
            }
            title,
            description,
            content
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
        return response.data.advancedReactCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.prevPage {
  top: 450px;
  z-index: 1000;
  left: 4%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
}
.nextPage {
  top: 450px;
  z-index: 1000;
  right: 4%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
}

.reactC {
  overflow-x: hidden;
}

.backgroundWrap {
  position: relative;
  .waves {
    position: absolute;
    z-index: 10;
  }
  .Background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
    z-index: 10;
  }
}
.Coding {
  margin-top: 430px;
}

.CourseWrapper {
  margin-top: 100px;
  display: grid;
  justify-content: center;
  text-align: center;
}
.CourseHeroWrapper {
  z-index: 1000;
  display: grid;
  justify-items: center;
  gap: 20px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px;
}
.Illustration {
  padding-top: 140px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}
.Title {
  max-width: 500px;
  margin: 0 auto;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  @media (max-width: 900px) {
    font-size: 45px;
  }
  line-height: 72px;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
}
.Description {
  max-width: 600px;
  margin: 0 auto;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  mix-blend-mode: normal;
}
</style>
