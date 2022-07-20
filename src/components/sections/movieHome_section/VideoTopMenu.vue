<template>
  <!-- transition => animate.css库 -->

  <div class="Wrap">
    <div class="videoContentWrapper">
      <!-- icon -->
      <transition
        name="rubberBand"
        enter-active-class="animate__animated animate__rubberBand "
      >
        <img
          v-show="show"
          class="icon"
          src="@/assets/icons/icon.svg"
          alt="icon"
          @click="goHome"
        />
      </transition>

      <!-- 导航按钮 -->
      <transition
        name="zoomInUp"
        enter-active-class="animate__animated animate__zoomInUp"
      >
        <div v-show="show" class="menuButtons">
          <div v-for="(icon, index) in icons" :key="index">
            <VideoTemplate :url="icon.url" :title="icon.title" />
          </div>
          <ThemeSwitch v-show="!isOnComputer" />
        </div>
      </transition>

      <!-- 搜索框 -->
      <transition
        name="light-speed"
        enter-active-class="animate__animated animate__lightSpeedInLeft"
      >
        <div v-show="isOnComputer && show" class="input">
          <input type="text" class="search" />
          <img
            v-if="isDarkMode"
            src="@/assets/icons/sort.svg"
            alt="sort"
            class="sort"
          />
          <img
            v-else
            src="@/assets/icons/search-dark.svg"
            alt="sort"
            class="sort"
          />
        </div>
      </transition>

      <!-- 登陆按钮 -->
      <transition
        name="zoom-in-left"
        enter-active-class="animate__animated animate__zoomInUp"
        leave-active-class="animate__animated animate__zoomOutRight"
      >
        <div v-show="isOnComputer && show" class="User">
          <AccountButton text="登陆" where="/signin" />
          <AccountButton text="注册" where="/signin" />
          <ThemeSwitch style="transform: scale(0.7); margin-left: 80px" />
        </div>
      </transition>
    </div>

    <!-- 下面的都是在手机上显示的东西 ==> v-show="!isOnComputer" -->
    <transition
      name="zoomIn"
      enter-active-class="animate__animated animate__zoomIn"
    >
      <div v-show="!isOnComputer && show" class="phoneButton">
        <div class="LogContent">
          <HomeButton
            :isColorReversed="false"
            description="Log In"
            where="/login"
          />
          <HomeButton
            :isColorReversed="true"
            description="Sign Up"
            where="/register"
          />
        </div>
        <img
          class="smile"
          v-show="!isOnComputer"
          src="@/assets/svg/smile.svg"
          alt="smile"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import VideoTemplate from "@/components/group/movieHome/navigationBar/VideoTemplate.vue";
import AccountButton from "@/components/group/movieHome/navigationBar/AccountButton.vue";
import HomeButton from "@/components/button/HomeButton.vue";
import ThemeSwitch from "@/components/button/ThemeSwitch.vue";
export default {
  props: ["isOnComputer"],
  components: {
    VideoTemplate,
    AccountButton,
    HomeButton,
    ThemeSwitch,
  },
  data() {
    return {
      icons: [
        {
          url: require("@/assets/icons/home.svg"),
          title: "首页",
        },
        {
          url: require("@/assets/icons/videos.svg"),
          title: "影片",
        },
      ],
      show: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.videoContentWrapper {
  @include gridStart(4);
  @media (max-width: 900px) {
    @include gridStart(2);
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    padding: 0;
  }
  padding: 20px;
  .icon {
    width: 60px;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }
    @media (max-width: 900px) {
      width: 60px;
    }
  }
}
.menuButtons {
  @include gridCenter(3);
  padding: 20px 0;
  animation-delay: 0.2s;
  @media (max-width: 900px) {
  }
}
.input {
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: center;
  gap: 10px;
  .search {
    &:focus {
      filter: drop-shadow(0px 30px 30px rgba(0, 0, 0, 0.25));
      transform: translateX(20px);
    }
    outline: none;
    background: linear-gradient(
      180deg,
      rgba(99, 106, 150, 0.4) 0%,
      rgba(182, 186, 214, 0.25) 100%
    );
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(40px);
    border-radius: 30px;
    height: 40px;
    width: 300px;
    padding-left: 20px;
    margin-top: -5px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    color: #ffffff;
  }
}
.sort {
  width: 40px;
  padding: 12px;
  right: 16px;
  top: 5px;
  cursor: pointer;
  &:hover {
    @include hoverButtom;
  }
}
.User {
  @include gridCenter(3);
  gap: 10px;
  animation-delay: 0.6s;
}
.phoneButton {
  position: relative;
  .LogContent {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(4px);
    border-radius: 60px 0px 60px 60px;
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    transform: scale(0.8);
  }
  .smile {
    position: absolute;
    width: 150px;
    left: 100px;
    top: 120px;
  }
}
</style>
