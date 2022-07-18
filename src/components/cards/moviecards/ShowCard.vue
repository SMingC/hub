<template>
  <div class="videoContentWrapper">
    <el-carousel
      v-show="isOnComputer"
      indicator-position="outside"
      type="card"
      style="width: 90vw"
      :height="isOnComputer ? '400px' : '100px'"
    >
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="loopImage" :src="url" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: ["isOnComputer"],
  data() {
    return {
      url: require("@/assets/img/strangeDoctor.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";

.videoContentWrapper {
  display: grid;
  padding-top: 40px;
  @media (max-width: 900px) {
    padding-top: 20px;
  }
  .loopImage {
    width: 100%;
    height: inherit;
  }
}
</style>
