<template>
  <div>
    <Header />
    <div
      class="container"
      :class="{
        'light-background': !isDarkMode,
        'dark-background': isDarkMode,
      }"
    >
      <Notification v-if="hasText" :text="text" />
      <RequestAccount />
      <div class="login">
        <img src="@/assets/svg/DCHQ.svg" v-show="isDarkMode" />
        <img src="@/assets/svg/DCHQ-dark.svg" v-show="!isDarkMode" />
        <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
          登录到 NCHU_200hub
        </h4>
        <form @submit.prevent="onSubmit">
          <input
            type="email"
            placeholder="Email"
            :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
            v-model="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
            v-model="password"
            required
          />
          <button style="cursor: pointer">Sign In</button>
        </form>
        <router-link
          to="/recover"
          :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
          >Forgot your password?</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/group/signIn/RequestAccount.vue";
import ThemeSwitch from "@/components/button/ThemeSwitch.vue";
import Notification from "@/components/group/signIn/Notification.vue";
import Header from "@/components/Headers/Header.vue";

import { auth } from "@/main";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification,
    Header,
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: "",
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth
        .login(email, password, true)
        .then((res) => {
          // console.log("===sigin success ===", res);
          this.$router.replace("/video");
        })
        .catch((err) => {
          console.log("===bad sigin", err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 16px;
  padding-bottom: 24px;
  position: relative;
}

.login {
  width: 400px;
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
}

.github-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
