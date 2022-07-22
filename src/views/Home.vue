<template>
  <div class="ALL">
    <Header />
    <HomeTop />
    <HomeCenter style="margin-top: 100px" />
    <News style="margin-top: 100px" />
  </div>
</template>

<script>
import Header from "@/components/Headers/Header.vue";
import HomeTop from "@/components/sections/WelcomeHome_section/HomeTop.vue";
import HomeCenter from "@/components/sections/WelcomeHome_section/HomeCenter.vue";
import News from "@/components/sections/WelcomeHome_section/News.vue";
export default {
  components: {
    Header,
    HomeCenter,
    HomeTop,
    News,
  },
  mounted() {},
  data() {
    return { result: "" };
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
