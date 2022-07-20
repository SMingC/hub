<template>
  <div
    class="videoTopWrapper"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
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
  },
  data() {
    return {
      isOnComputer: true,
    };
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scopde>
@import "@/global-styles/mixin.scss";
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.light-background {
  background: $light-gray;
}
.dark-background {
  background: $dark-blue;
}
.videoTopWrapper {
}
</style>
