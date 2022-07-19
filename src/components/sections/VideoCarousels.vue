<template>
  <div class="videoWrapper">
    <ShowCard :isOnComputer="isOnComputer" />
    <DescriptionVideo text="popular" />
    <PopularCards />
  </div>
</template>

<script>
import ShowCard from "@/components/cards/moviecards/ShowCard.vue";
import DescriptionVideo from "@/components/cards/moviecards/DescriptionVideo.vue";
import CardDescriptions from "@/components/cards/moviecards/CardDescriptions.vue";
import PopularCards from "@/components/cards/moviecards/PopularCards.vue";

export default {
  components: {
    ShowCard,
    DescriptionVideo,
    CardDescriptions,
    PopularCards,
  },
  props: ["isOnComputer"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";
.videoWrapper {
  overflow-x: auto;
  @include gridRowsCenter(3);
  justify-items: start;
  padding: 40px;
  @media (max-width: 900px) {
    padding: 20px;
  }
}
</style>
