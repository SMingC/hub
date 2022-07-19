<template>
  <div class="videoTopWrapper">
    <VideoTopMenu :isOnComputer="isOnComputer" />
    <VideoCarousels :isOnComputer="isOnComputer" />
    <VideoTV :isOnComputer="isOnComputer" />
    <AllSortsVideo :isOnComputer="isOnComputer" />
    <FooterVideoHome />
  </div>
</template>

<script>
import VideoTopMenu from "@/components/sections/movieHome_section/VideoTopMenu.vue";
import VideoCarousels from "@/components/sections/movieHome_section/VideoCarousels.vue";
import VideoTV from "@/components/sections/movieHome_section/VideoTV.vue";
import AllSortsVideo from "@/components/sections/movieHome_section/AllSortsVideo.vue";
import FooterVideoHome from "@/components/group/movieHome/footer/FooterVideoHome.vue";
export default {
  components: {
    VideoTopMenu,
    VideoCarousels,
    AllSortsVideo,
    VideoTV,
    FooterVideoHome,
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
}
</style>
