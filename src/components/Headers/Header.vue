<template>
  <div id="nav" :class="{ 'nav-light': !isDarkMode, 'nav-dark': isDarkMode }">
    <div
      v-show="isOnComputer"
      :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
      style="font-family: 'HanziPen SC'; font-weight: 400"
    >
      NCHU_200hub
    </div>
    <div class="nav-1">
      <img
        @click="
          () => {
            this.$router.replace('/');
          }
        "
        src="@/assets/svg/DCHQ-small.svg"
        v-show="isDarkMode"
      />
      <img
        @click="
          () => {
            this.$router.replace('/');
          }
        "
        src="@/assets/svg/DCHQ-small-dark.svg"
        v-show="!isDarkMode"
      />
      <router-link
        to="/"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        class="buttonHover"
        >首页</router-link
      >
      <router-link
        to="/video"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        class="buttonHover"
        >观看影片</router-link
      >
      <router-link
        to="/team"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        class="buttonHover"
        >团队</router-link
      >
    </div>
    <div v-show="!isOnComputer" style="position: relative">
      <!-- <router-link to="signin" class="dengl">
        <img v-if="isDarkMode" src="@/assets/svg/login.svg" />
        <img v-else src="@/assets/svg/login-dark.svg" />
      </router-link> -->
      <!-- <img src="@/assets/icons/Menu.svg" alt="menu" style="width: 80px" /> -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        style="transform: scale(0.8); border-radius: 200px"
      >
        <el-submenu
          index="1"
          style="transform: scale(0.7); border-radius: 200px"
        >
          <template slot="title">
            <img src="@/assets/svg/lines.svg" alt="liens"
          /></template>
          <el-menu-item index="2-1">
            <div style="buger">
              <router-link
                to="/"
                :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
                class="buttonHover"
                >首页
              </router-link>
            </div></el-menu-item
          >
          <el-menu-item index="2-2">
            <router-link
              to="/video"
              :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
              class="buttonHover"
              >观看影片</router-link
            ></el-menu-item
          >
          <el-menu-item index="2-3">
            <router-link
              to="/team"
              :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
              class="buttonHover"
              >团队</router-link
            ></el-menu-item
          >
          <el-menu-item index="2-4">
            <router-link
              to="/signin"
              :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
              class="buttonHover"
              >登陆/注册</router-link
            ></el-menu-item
          >
        </el-submenu>
      </el-menu>
    </div>
    <ThemeSwitch v-show="isOnComputer" style="transform: scale(0.8)" />
  </div>
</template>

<script>
import ThemeSwitch from "@/components/button/ThemeSwitch.vue";
export default {
  name: "Header",
  components: { ThemeSwitch },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  data() {
    return {
      isOnComputer: true,
    };
  },
  created() {
    if (document.body.clientWidth < 900) {
      this.isOnComputer = false;
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/mixin.scss";
.buttonHover {
  padding: 10px;
  &:hover {
    @include hoverButtom;
  }
}
.dengl {
  @include gridCenter(2);
  padding: 10px;
  &:hover {
    @include hoverButtom;
  }
  gap: 3px;
}
.nav-light {
  background: #f0f3f5;
  box-shadow: 1px 3px 20px 4px #c6d0eb59;
}

.nav-dark {
  background: $super-dark-blue;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
}

#nav {
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 15%;

  a {
    font-weight: bold;
    color: $dark-gray;
    &.router-link-exact-active.dark-nav {
      color: $white;
    }
    &.router-link-exact-active.light-nav {
      color: $middle-blue;
    }
  }

  a,
  img {
    &:hover {
      cursor: pointer;
    }
  }
}

.nav-1 {
  display: flex;
  align-items: center;

  a {
    margin-left: 20px;
    margin-right: 20px;
    @media all and (max-width: 767px) {
      display: none;
    }
  }

  img {
    margin-right: 20px;
  }
}
</style>
