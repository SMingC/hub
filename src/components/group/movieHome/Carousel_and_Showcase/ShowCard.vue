<template>
  <div class="videoContentWrapper">
    <el-carousel
      v-show="isOnComputer"
      indicator-position="outside"
      type="card"
      style="width: 90vw"
      height="355px"
    >
      <el-carousel-item v-for="item in 4" :key="item">
        <div style="position: relative">
          <img class="loopImage" :src="url" />
          <CardDescriptions
            text="this is the video description"
            class="leftBottom"
          />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import CardDescriptions from "@/components/group/movieHome/CardDescriptions.vue";
export default {
  components: {
    CardDescriptions,
  },
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
  .leftBottom {
    bottom: 16px;
    left: 10px;
  }
  .el-carousel__item:nth-child(2n) {
    background: linear-gradient(
      180deg,
      rgba(108, 207, 238, 0.5) 0%,
      rgba(76, 127, 228, 0.5) 100%
    );
    backdrop-filter: blur(40px);
    border-radius: 20px;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background: rgba(255, 255, 255, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    border-radius: 20px;
  }
}
</style>
