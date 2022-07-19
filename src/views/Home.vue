<template>
  <div class="ALL">
    <HomeTop />
    <HomeCenter style="margin-top: 100px" />
    <News style="margin-top: 100px" />
  </div>
</template>

<script>
import HomeTop from "@/components/sections/WelcomeHome_section/HomeTop.vue";
import HomeCenter from "@/components/sections/WelcomeHome_section/HomeCenter.vue";
import News from "@/components/sections/WelcomeHome_section/News.vue";
export default {
  components: {
    HomeCenter,
    HomeTop,
    News,
  },
};
</script>

<style lang="scss" scoped>
.ALL {
  @media (max-width: 900px) {
    overflow-x: hidden;
  }
}
</style>
