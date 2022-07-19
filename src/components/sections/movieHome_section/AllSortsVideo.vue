<template>
  <div class="SortWrapper">
    <div class="SortContent">
      <div class="cinematic">
        <CinematicMovie />
      </div>
    </div>
  </div>
</template>

<script>
import CinematicMovie from "@/components/group/movieHome/Sorts/CinematicMovie.vue";
export default {
  components: {
    CinematicMovie,
  },
  props: ["isOnComputer"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";
.SortWrapper {
  .SortContent {
  }
}
</style>
