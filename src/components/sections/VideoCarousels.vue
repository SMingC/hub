<template>
  <div class="videoWrapper">
    <ShowCard :isOnComputer="isOnComputer" />
  </div>
</template>

<script>
import ShowCard from "@/components/cards/moviecards/ShowCard.vue";
export default {
  components: {
    ShowCard,
  },
  props: ["isOnComputer"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";
.videoWrapper {
  @include gridRowsCenter(3);
}
</style>
