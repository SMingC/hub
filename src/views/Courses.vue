<template>
  <div>
    <Header />
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
    <markdown-it-vue
      v-show="isPro"
      :options="options"
      :content="contents[index].content"
    />Z
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";
import Header from "@/components/Headers/Header.vue";
import PurchaseButton from "@/components/button/PurchaseButton.vue";
export default {
  async created() {
    this.contents = await this.getcartoonUrl();
    // console.log(this.contents);
    const query = this.$route.query;
    this.index = query.index;
    if (sessionStorage.getItem("email") !== null) {
      this.isPro = true;
    }
  },
  data() {
    return {
      contents: [],
      index: 0,
      isPro: false,
      options: {
        linkAttributes: {
          attrs: {
            target: "_blank",
            rel: "noopener",
          },
        },
        katex: {
          throwOnError: false,
          errorColor: "#cc0000",
        },
        icons: "font-awesome",
        githubToc: {
          tocFirstLevel: 2,
          tocLastLevel: 3,
          tocClassName: "toc",
          anchorLinkSymbol: "",
          anchorLinkSpace: false,
          anchorClassName: "anchor",
          anchorLinkSymbolClassName: "octicon octicon-link",
        },
        mermaid: {
          theme: "default",
        },
        image: {
          hAlign: "left",
          viewer: true,
        },
      },
    };
  },
  components: { MarkdownItVue, Header, PurchaseButton },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
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

.CourseWrapper {
  display: grid;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  justify-content: center;
  text-align: center;
}
.CourseHeroWrapper {
  display: grid;
  justify-items: center;
  gap: 20px;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 20px;
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
