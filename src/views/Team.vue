<template>
  <div class="manage">
    <Header />
    <!-- <div class="backgroundWrap">
      <div class="Background"></div>
      <img class="waves" src="@/assets/waves/hero-wave1.svg" />
      <img class="waves" src="@/assets/waves/hero-wave2.svg" />
      <img class="waves" src="@/assets/waves/hero-wave3.svg" />
    </div> -->
    <div class="container">
      <h1 :class="{ dark: !isDarkMode, light: isDarkMode }">React</h1>
      <div class="cards">
        <template v-for="(content, index) in contents">
          <transition
            :key="content.url"
            appear
            appear-active-class="animate__animated animate__flipInX"
          >
            <a
              class="card"
              style="cursor: pointer"
              :id="`card-${index + 1}`"
              :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
              @click="goTeams(index)"
            >
              <img
                :src="content.illustration.url"
                class="card-header"
                :class="{
                  'light-header': !isDarkMode,
                  'dark-header': isDarkMode,
                }"
              />
              <h3 :class="{ dark: !isDarkMode, light: isDarkMode }">
                {{ index + 1 + "." + content.title }}
              </h3>
              <p
                :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
              >
                {{ content.description }}
              </p>
            </a>
          </transition>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Headers/Header.vue";
import Courses from "@/views/Courses.vue";
import "markdown-it-vue/dist/markdown-it-vue.css";
export default {
  name: "Team",
  components: {
    Header,
    Courses,
  },
  data() {
    return {
      currentScroll: 0,
      contents: [],
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  async created() {
    this.contents = await this.getcartoonUrl();
    // console.log(this.contents);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
    },
    goTeams(index) {
      this.$router.push({
        name: "course",
        query: {
          index: index,
        },
      });
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

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

/* .backgroundWrap {
  position: relative;
  .waves {
    position: absolute;
    z-index: -1;
  }
  .Background {
    position: absolute;
    width: 100%;
    height: 800px;
    background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
    z-index: -1;
  }
} */
.illustration {
  width: 700px;
  @media (max-width: 900px) {
    width: 350px;
  }
}
.manage {
  overflow-x: hidden;
}
.container {
  padding-left: 15%;
  padding-right: 10%;
}

.cards {
  margin: 0 -20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

#card-1 {
  animation-delay: 0s;
}
#card-2 {
  animation-delay: 0.5s;
}
#card-3 {
  animation-delay: 1s;
}
#card-4 {
  animation-delay: 1.5s;
}
#card-5 {
  animation-delay: 2s;
}
#card-6 {
  animation-delay: 2.5s;
}

.card {
  width: 100%;
  max-width: 300px;
  height: 420px;
  border-radius: 10px;
  margin: 20px;
}

.light-card {
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(103, 110, 144, 0.15);
  &:hover {
    box-shadow: 0 4px 4px rgba(103, 110, 144, 0.05),
      0 2px 2px rgba(103, 110, 144, 0.05);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px;
  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25);
  }
}

.card-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.light-header {
  background: $light-gray;
}

.dark-header {
  background: #283049;
}

h1 {
  margin-top: 40px;
}

h3 {
  margin-bottom: 16px;
}

h3.dark {
  @include heading-3($black);
}

h3.light {
  @include heading-3($white);
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}
</style>
