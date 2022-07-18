<template>
  <div class="log">{{ text }}</div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";
.log {
  font-family: "LingWai SC";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 45px;
  padding: 5px 50px;
  color: #ffffff;
  &:hover {
    @include hoverButtom;
    cursor: pointer;
  }
}
</style>
