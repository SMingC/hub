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
export default {
  name: "HomeButton",
  props: ["isColorReversed", "description", "where"],
};
</script>

<style lang="scss" scoped>
@mixin buttonDefault {
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  padding: 15px 30px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
}
.HomeButton {
  @mixin hoverChange {
    transform: translateY(5px);
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }

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
