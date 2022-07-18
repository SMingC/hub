<template>
  <div class="videoTopWrapper">
    <div class="videoContentWrapper">
      <img class="icon" src="@/assets/icons/icon.svg" alt="icon" />
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
        <div class="log">登陆</div>
        <div class="log">注册</div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoTemplate from "@/components/button/VideoTemplate.vue";
export default {
  components: {
    VideoTemplate,
  },
  created() {
    if (document.body.clientWidth <= 900) {
      this.isOnComputer = false;
    }
    console.log(this.isOnComputer);
  },
  data() {
    return {
      isOnComputer: true,
      icons: [
        {
          url: require("@/assets/icons/home.svg"),
          title: "首页",
        },
        {
          url: require("@/assets/icons/videos.svg"),
          title: "影片",
        },
        {
          url: require("@/assets/icons/money.svg"),
          title: "打赏",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scopde>
@import "@/assets/css/layout.scss";
.videoTopWrapper {
  background: linear-gradient(
    114.23deg,
    #594444 14.64%,
    rgba(0, 0, 0, 0.7) 47.07%,
    #475f66 80.65%
  );
  .videoContentWrapper {
    @include gridStart(4);
    @media (max-width: 900px) {
      @include gridStart(3);
    }
    padding: 20px;
    .icon {
      width: 60px;
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
    .log {
      font-family: "LingWai SC";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 45px;
      padding: 5px 50px;
      color: #ffffff;
      &:hover {
        @include hoverButtom;
        cursor: pointer;
      }
    }
  }
}
</style>
