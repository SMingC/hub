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
    <div class="Coding">
      <markdown-it-vue v-show="isPro" :content="contents[index].content" />
    </div>
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";
import Header from "@/components/Headers/Header.vue";
import PurchaseButton from "@/components/button/PurchaseButton.vue";
export default {
  async mounted() {
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
.Coding {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  max-width: 712px;
  margin: 0 auto;
  text-align: start;
  padding: 0px 20px 100px;

  @media (max-width: 414px) {
    font-size: 17px;
  }

  img,
  video {
    margin: 20px 0;
    width: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    overflow: hidden;
  }

  iframe {
    margin: 20px 0;
    width: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    overflow: hidden;
  }

  h2 {
    padding: 20px 0;
    font-size: 32px;
    line-height: 120%;
  }

  h3 {
    padding: 20px 0 0;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 500;
    opacity: 0.7;
  }

  h2,
  h3 {
    margin-top: 50px;
  }

  p {
    text-align: left;
    color: rgba(0, 0, 0, 0.8);
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: rgb(0, 207, 253);
  }

  blockquote {
    padding: 0 16px 0 50px;
    background-repeat: no-repeat;
    background-position: 14px 2px;
    p {
      font-size: 28px;
      font-weight: 500;
      line-height: 140%;
    }
  }

  pre {
    border-radius: 16px;
  }

  code {
    font-size: 17px;
    font-family: "SF Mono", -apple-system, system-ui, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
  }

  ol {
    padding: 0;
  }

  @media (max-width: 740px) {
    font-size: 18px;
    padding: 0 30px;

    .Content {
      margin: 50px 20px;
    }
    p {
      font-size: 18px;
    }
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 20px;
    }
    blockquote {
      margin: 0;
      p {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 414px) {
    padding: 0 20px;
    code {
      font-size: 15px;
    }
    blockquote {
      margin: 0;
      p {
        font-size: 17px;
      }
    }
  }

  /* Theme */
  code[class*="language-"],
  pre[class*="language-"] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    color: #eee;
    background: #222;
    line-height: 1.5em;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    @media (prefers-color-scheme: dark) {
      background: #141432;
    }
  }

  code[class*="language-"]::-moz-selection,
  pre[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection,
  pre[class*="language-"] ::-moz-selection {
    background: #363636;
  }

  code[class*="language-"]::selection,
  pre[class*="language-"]::selection,
  code[class*="language-"] ::selection,
  pre[class*="language-"] ::selection {
    background: #363636;
  }

  :not(pre) > code[class*="language-"] {
    white-space: normal;
    border-radius: 0.2em;
    padding: 0.1em;
  }

  pre[class*="language-"] {
    overflow: auto;
    position: relative;
    margin: 0.5em 0;
    padding: 1.25em 1em;
  }

  .language-css > code,
  .language-sass > code,
  .language-scss > code {
    color: #fd9170;
  }

  [class*="language-"] .namespace {
    opacity: 0.7;
  }

  .token.atrule {
    color: #c792ea;
  }

  .token.attr-name {
    color: #ffcb6b;
  }

  .token.attr-value {
    color: #a5e844;
  }

  .token.attribute {
    color: #a5e844;
  }

  .token.boolean {
    color: #c792ea;
  }

  .token.builtin {
    color: #ffcb6b;
  }

  .token.cdata {
    color: #80cbc4;
  }

  .token.char {
    color: #80cbc4;
  }

  .token.class {
    color: #ffcb6b;
  }

  .token.class-name {
    color: #f2ff00;
  }

  .token.comment {
    color: #616161;
  }

  .token.constant {
    color: #c792ea;
  }

  .token.deleted {
    color: #ff6666;
  }

  .token.doctype {
    color: #616161;
  }

  .token.entity {
    color: #ff6666;
  }

  .token.function {
    color: #c792ea;
  }

  .token.hexcode {
    color: #f2ff00;
  }

  .token.id {
    color: #c792ea;
    font-weight: bold;
  }

  .token.important {
    color: #c792ea;
    font-weight: bold;
  }

  .token.inserted {
    color: #80cbc4;
  }

  .token.keyword {
    color: #c792ea;
  }

  .token.number {
    color: #fd9170;
  }

  .token.operator {
    color: #89ddff;
  }

  .token.prolog {
    color: #616161;
  }

  .token.property {
    color: #80cbc4;
  }

  .token.pseudo-class {
    color: #a5e844;
  }

  .token.pseudo-element {
    color: #a5e844;
  }

  .token.punctuation {
    color: #89ddff;
  }

  .token.regex {
    color: #f2ff00;
  }

  .token.selector {
    color: #ff6666;
  }

  .token.string {
    color: #a5e844;
  }

  .token.symbol {
    color: #c792ea;
  }

  .token.tag {
    color: #ff6666;
  }

  .token.unit {
    color: #fd9170;
  }

  .token.url {
    color: #ff6666;
  }

  .token.variable {
    color: #ff6666;
  }
}
</style>
