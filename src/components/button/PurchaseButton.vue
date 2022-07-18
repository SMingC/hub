<template>
  <div id="Wrapper" @click="bookHotel">
    <div id="ContentWrapper">
      <div id="Content">
        <div id="WalletWrapper">
          <div id="Wallet">
            <img id="pricing" src="@/img/pricing.svg" alt="pricing" />
            <img id="back" src="@/img/background.svg" alt="back" />
          </div>
          <img src="@/img/ring.svg" alt="ring" id="ring" />
        </div>
        <div id="TextWrapper">
          <div id="Title">hotel</div>
          <div id="description">
            让所有热爱生活的人， 安享艾登花园理想之园。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bookHotel"],
};
</script>

<style scoped>
#Wrapper {
  cursor: pointer;
  position: relative;
}
#Wrapper *,
#Wrapper {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
#Wrapper:hover {
  transform: scale(1.2);
}
#Wrapper:hover #ring {
  transform: scale(1.1) rotate(30deg);
}
#Wrapper:hover #back {
  filter: hue-rotate(10deg) brightness(150%) saturate(120%);
}
#Wrapper #ContentWrapper {
  padding: 12px;
  gap: 10px;
  width: 280px;
  height: 81px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
}
#Wrapper #Content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
}
#Wrapper #Content #WalletWrapper {
  display: grid;
  grid-template-columns: repeat(2, auto);
}
#Wrapper #Content #WalletWrapper #Wallet {
  position: relative;
}
#Wrapper #Content #WalletWrapper #Wallet #pricing {
  transform: scale(0.87);
  z-index: 100;
  position: relative;
  width: 40px;
  height: 40px;
}
#Wrapper #Content #WalletWrapper #Wallet #back {
  position: absolute;
  left: -19px;
  top: -13px;
}
#Wrapper #Content #WalletWrapper #ring {
  position: absolute;
  left: -7px;
  top: -1px;
}
#Wrapper #Content #TextWrapper {
  margin-left: -120px;
  display: grid;
  grid-template-rows: repeat(2, auto);
  justify-content: center;
  align-items: center;
}
#Wrapper #Content #TextWrapper #Title {
  width: 45px;
  height: 19px;
  font-family: "ABeeZee";
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
  color: #000000;
}
#Wrapper #Content #TextWrapper #description {
  width: 143px;
  height: 34px;
  font-family: "ABeeZee";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  /* or 17px */
  color: #595c7b;
}
</style>
