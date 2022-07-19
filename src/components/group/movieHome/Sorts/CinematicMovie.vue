<template>
  <div class="cinematicWrapper">
    <div class="cinematicContent">
      <DescriptionVideo text="new cinematic movies" />
    </div>
  </div>
</template>

<script>
import DescriptionVideo from "@/components/group/movieHome/DescriptionVideo.vue";
export default {
  components: {
    DescriptionVideo,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";
.cinematicWrapper {
  .cinematicContent {
    @include gridRowsStart(2);
  }
}
</style>
