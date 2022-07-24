<template>
  <div class="manage">
    <Header />
    <div class="backgroundWrap">
      <el-skeleton v-show="!getted" :rows="6" animated />
      <div class="Background"></div>
      <img
        class="waves"
        src="@/assets/waves/hero-wave1.svg"
        style="top: 100px; filter: blur(60px)"
      />
      <img
        class="waves"
        src="@/assets/waves/hero-wave2.svg"
        style="top: 350px"
      />
      <img
        class="waves"
        src="@/assets/waves/hero-wave3.svg"
        style="top: 550px"
      />
    </div>
    <div class="container">
      <div class="cards">
        <transition
          appear
          appear-active-class="animate__animated animate__flipInX"
        >
          <a
            class="card"
            style="cursor: pointer; z-index: 1000; animation-delay: 0.5s"
            :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
            @click="goAdvancedreact"
          >
            <img
              src="https://images.ctfassets.net/ooa29xqb8tix/6VgUemHCY8KcjzznwJoZe1/eff98cb2a5bc0d74ec8cd1252223e115/React_Hook200x150_cover.svg"
              class="card-header"
              :class="{
                'light-header': !isDarkMode,
                'dark-header': isDarkMode,
              }"
            />
            <h3 :class="{ dark: !isDarkMode, light: isDarkMode }">
              Build a web app with React Hooks
            </h3>
            <p
              :class="{
                'light-text': isDarkMode,
                'dark-text': !isDarkMode,
              }"
            >
              Learn how we built the new Design+Code site with React Hooks using
              Gatsby, Netlify, and advanced CSS techniques with Styled
              Components.
            </p>
          </a>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Headers/Header.vue";
import Courses from "@/views/Courses/ReactCourses.vue";
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
      getted: false,
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  created() {
    this.getted = true;
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
    goAdvancedreact() {
      this.$router.push("/advanced_react");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.backgroundWrap {
  position: relative;
  .waves {
    position: absolute;
    z-index: 10;
  }
  .Background {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
    z-index: 10;
  }
}
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
  z-index: 1000;
}

.cards {
  margin: 0 -20px;
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card {
  width: 100%;
  max-width: 300px;
  height: 480px;
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
