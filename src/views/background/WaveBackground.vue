<template>
  <Wrapper>
    <Background />
    <img
      src="@/assets/waves/hero-wave1.svg"
      style="top: 100px; filter: blur(60px)"
      alt="wave1"
      class="Wave"
    />
    <img
      src="@/assets/waves/hero-wave2.svg"
      style="top: 350px"
      alt="wave2"
      class="Wave"
    />
    <img
      src="@/assets/waves/hero-wave3.svg"
      style="top: 100px; filter: blur(60px)"
      alt="wave3"
      class="Wave"
    />
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  z-index: -1;
`;

export default {
  components: { Wrapper, Background },
};
</script>

<style lang="scss" scoped>
.Wave {
  position: absolute;
  z-index: -1;
}
</style>
