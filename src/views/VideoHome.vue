<template>
  <div class="videoTopWrapper">
    <VideoTopMenu :isOnComputer="isOnComputer" />
    <VideoCarousels :isOnComputer="isOnComputer" />
  </div>
</template>

<script>
import VideoTopMenu from "@/components/sections/VideoTopMenu.vue";
import VideoCarousels from "@/components/sections/VideoCarousels";
export default {
  components: {
    VideoTopMenu,
    VideoCarousels,
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
