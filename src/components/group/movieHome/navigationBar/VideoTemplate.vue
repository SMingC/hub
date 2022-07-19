<template>
  <div class="iconTopWrapper">
    <div class="iconTopContent">
      <img :src="url" alt="home" />
      <div class="title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["url", "title"],
};
</script>

<style lang="scss" scoped>
.iconTopWrapper {
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    background-blend-mode: overlay;
    mix-blend-mode: normal;
    border-radius: 10px;
  }
  .iconTopContent {
    display: grid;
    grid-template-columns: 20px 40px;
    align-items: center;
    justify-items: center;
    padding: 10px 20px;
    @media (max-width: 900px) {
      grid-template-columns: 10px 40px;
      gap: 10px;
    }
    .title {
      font-family: "SF Pro";
      font-style: normal;
      font-weight: 590;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
      @media (max-width: 900px) {
        line-height: 10px;
      }
    }
  }
}
</style>
