<template>
  <div class="videoWrapper">
    <ShowCard :isOnComputer="isOnComputer" />
    <DescriptionVideo text="popular" />
    <div class="centerCards">
      <CenterLeftCard
        :url="textLeftCard.url"
        :description="textLeftCard.description"
        :content="textLeftCard.content"
        :stared="true"
      />
      <div class="LoopCards">
        <div v-for="(item, index) in 4" :key="index">
          <CenterRightCards
            :url="textRightCard.url"
            :description="textRightCard.description"
            :content="textRightCard.content"
            :stared="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowCard from "@/components/cards/moviecards/ShowCard.vue";
import DescriptionVideo from "@/components/cards/moviecards/DescriptionVideo.vue";
import CardDescriptions from "@/components/cards/moviecards/CardDescriptions.vue";
import CenterLeftCard from "@/components/cards/moviecards/CenterLeftCard.vue";
import CenterRightCards from "@/components/cards/moviecards/CenterRightCards.vue";
export default {
  components: {
    ShowCard,
    DescriptionVideo,
    CardDescriptions,
    CenterLeftCard,
    CenterRightCards,
  },
  props: ["isOnComputer"],
  data() {
    return {
      textLeftCard: {
        url: require("@/assets/img/leftCardtext.png"),
        description: "ms.marvel",
        content: "1/6",
      },
      textRightCard: {
        url: require("@/assets/img/rightCardText.png"),
        description: "agent of shield: ss7",
        content: "1/13",
      },
    };
  },
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
  .centerCards {
    padding-top: 60px;
    @media (max-width: 900px) {
      padding-top: 40px;
    }
    @include gridCenter(2);
    gap: 60px;
    @media (max-width: 900px) {
      gap: 0;
    }
  }
  .LoopCards {
    @include gridCenter(2);
  }
}
</style>
