<template>
  <div
    :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
    class="log"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: ["text"],
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.dark-text {
  color: #1a2151;
}
.light-text {
  color: #e3e8ff;
}
.log {
  font-family: "LingWai SC";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 45px;
  padding: 5px 50px;
  &:hover {
    @include hoverButtom;
    cursor: pointer;
  }
}
</style>
