<template>
  <div class="tvCardsWrapper">
    <div v-show="isOnComputer" class="tvCardsContent">
      <DescriptionVideo text="new TV SERIES" />
      <div class="tvScaleWrapper">
        <TVcards
          :url="require('@/assets/img/coverCard.png')"
          name="MovieName"
          description="this is the movie description"
          where="/"
          style="margin-top: 200px; margin-left: 300px"
        />
        <div v-for="item in 2" :key="item">
          <TVcards
            :url="require('@/assets/img/coverCard.png')"
            name="MovieName"
            description="this is the movie description"
            where="/"
            style="margin-top: 200px"
          />
        </div>
      </div>
    </div>
    <div v-show="!isOnComputer" class="phoneTvCenter">
      <DescriptionVideo text="new TV SERIES" />
    </div>
  </div>
</template>

<script>
import TVcards from "@/components/cards/moviecards/TVcards.vue";
import DescriptionVideo from "@/components/cards/moviecards/DescriptionVideo.vue";
export default {
  components: {
    TVcards,
    DescriptionVideo,
  },
  props: ["isOnComputer"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";
.tvCardsWrapper {
  .tvCardsContent {
    @include gridRowsStart(2);
    padding-left: 30px;

    .tvScaleWrapper {
      @include gridCenter(3);
      gap: 100px;
    }
  }
  .phoneTvCenter {
    margin-top: -100px;
    @include gridRowsStart(2);
    padding: 40px 10px;
  }
}
</style>
