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
        class="buttonHover modeText"
        >🏠 首页</router-link
      >
      <router-link
        to="/video"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        class="buttonHover modeText"
        >🥵 开冲</router-link
      >
      <router-link
        to="/team"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        class="buttonHover modeText"
        >👩🏼‍🤝‍👨🏿 团队</router-link
      >
      <router-link
        v-if="!hasLogin"
        to="/signin"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        class="buttonHover modeText"
        >🎢 登陆·注册</router-link
      >
      <a
        v-else
        :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        class="buttonHover modeText"
        style="cursor: pointer"
        @click="logOut"
      >
        退出登录👋🏿
      </a>
    </div>
    <div v-show="!isOnComputer" style="position: relative">
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
          <el-menu-item index="1-1">
            <div style="buger">
              <router-link
                to="/"
                :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
                class="buttonHover modeText"
                >🏠 首页
              </router-link>
            </div></el-menu-item
          >
          <el-menu-item index="1-2">
            <router-link
              to="/video"
              :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
              class="buttonHover modeText"
              >🥵 开冲</router-link
            ></el-menu-item
          >
          <el-menu-item index="1-3">
            <router-link
              to="/team"
              :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
              class="buttonHover modeText"
              >👩🏼‍🤝‍👨🏿 团队</router-link
            ></el-menu-item
          >
          <el-menu-item index="1-4">
            <router-link
              v-if="!hasLogin"
              to="/signin"
              :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
              class="buttonHover modeText"
              >🎢 登陆·注册</router-link
            >
            <div
              v-else
              :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
              class="buttonHover modeText"
              @click="logOut"
            >
              退出登录👋🏿
            </div>
          </el-menu-item>
          <el-menu-item index="1-5">
            <div
              to="/signin"
              :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
              class="buttonHover modeText"
              @click="
                () => {
                  this.$store.commit('toggleDarkMode');
                }
              "
            >
              💡 贤者模式 {{ !isDarkMode ? "关😇" : "开😍" }}
            </div></el-menu-item
          >
        </el-submenu>
      </el-menu>
    </div>
    <ThemeSwitch v-show="isOnComputer" style="transform: scale(0.8)" />
  </div>
</template>

<script>
import ThemeSwitch from "@/components/button/ThemeSwitch.vue";
import { auth } from "@/main";
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
      hasLogin: false,
    };
  },
  created() {
    if (document.body.clientWidth < 900) {
      this.isOnComputer = false;
    }
    if (sessionStorage.getItem("email") !== null) {
      this.hasLogin = true;
    }
  },
  methods: {
    logOut() {
      const user = auth.currentUser();
      sessionStorage.clear();

      user.logout().then((res) => {
        this.$router
          .push({
            name: "signin",
            params: { userLoggedOut: true },
          })
          .catch((err) => {
            console.error("===logOutErr===", err);
          });
      });
    },
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
    transform: scale(1.1);
  }
}
.modeText {
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  @media (max-width: 900px) {
    font-size: 10px;
  }
  line-height: 22px;
  color: black;
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
