<template>
  <router-link :to="where" class="HomeButton">
    <div
      :class="!isColorReversed ? 'PurpleTangle' : 'BlackTangle'"
      style="position: relative"
    >
      {{ description }}
      <div
        :class="isColorReversed ? 'PurpleTangle' : 'BlackTangle'"
        style="
          position: absolute;
          z-index: -10;
          left: 5px;
          top: -10px;
          width: 120px;
          height: 55px;
        "
      ></div>
    </div>
  </router-link>
</template>

<script>
import "@/assets/css/layout.scss";
export default {
  name: "HomeButton",
  props: ["isColorReversed", "description", "where"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";
.HomeButton {
  :hover {
    .PurpleTangle {
      @include hoverChange;
    }
    .BlackTangle {
      @include hoverChange;
    }
  }
  .PurpleTangle {
    @include buttonDefault;
    background: #5400dc;
  }
  .BlackTangle {
    @include buttonDefault;
    background: #75e0e6;
  }
}
</style>
