<template>
  <div class="Wrap">
    <div class="videoContentWrapper">
      <img
        class="icon"
        src="@/assets/icons/icon.svg"
        alt="icon"
        @click="goHome"
      />
      <div class="menuButtons">
        <div v-for="(icon, index) in icons" :key="index">
          <VideoTemplate :url="icon.url" :title="icon.title" />
        </div>
      </div>
      <div v-show="isOnComputer" class="input">
        <input type="text" class="search" />
        <img src="@/assets/icons/sort.svg" alt="sort" class="sort" />
      </div>
      <div v-show="isOnComputer" class="User">
        <AccountButton text="登陆" />
        <AccountButton text="注册" />
      </div>
    </div>
    <div v-show="!isOnComputer" class="phoneButton">
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
  </div>
</template>

<script>
import VideoTemplate from "@/components/group/movieHome/navigationBar/VideoTemplate.vue";
import AccountButton from "@/components/group/movieHome/navigationBar/AccountButton.vue";
import HomeButton from "@/components/button/HomeButton.vue";
export default {
  props: ["isOnComputer"],
  components: {
    VideoTemplate,
    AccountButton,
    HomeButton,
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
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.videoContentWrapper {
  @include gridStart(4);
  @media (max-width: 900px) {
    @include gridStart(2);
    grid-template-rows: auto auto;
    gap: 30px;
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
      width: 40px;
      margin-left: -20px;
      margin-top: -40px;
    }
  }
}
.menuButtons {
  @include gridCenter(3);
  gap: 16px;
  @media (max-width: 900px) {
    gap: 10px;
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
    height: 30px;
    width: 300px;
    padding-left: 20px;

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
  @include gridCenter(2);
  gap: 20px;
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
