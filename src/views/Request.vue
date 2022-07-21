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
      <div class="request">
        <img src="@/assets/svg/DCHQ.svg" v-show="isDarkMode" />
        <img src="@/assets/svg/DCHQ-dark.svg" v-show="!isDarkMode" />
        <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
          注册账号
        </h4>
        <form @submit.prevent="onSubmit">
          <input
            type="请输入邮箱"
            placeholder="请输入邮箱"
            :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
            v-model="email"
            required
          />
          <button style="cursor: pointer">申请账号</button>
        </form>
        <router-link
          to="/signin"
          :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
          >已经有一个账号啦?🤩 戳我登陆</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Headers/Header.vue";
export default {
  name: "Request",
  components: { Header },
  data() {
    return {
      email: null,
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    onSubmit() {
      //发送到slack上面有问题（因为更新了有些东西后面再改吧

      const email = this.email;

      // Slack API logic
      let slackURL = new URL("https://slack.com/api/chat.postMessage");

      const data = {
        token:
          "xoxp-3829144515026-3814557566503-3852957987664-1cfcd00f62f7e1202dd8e7cad88f80f6",
        channel: "nchu_200hub",
        text: `${email} 这个逼请求了新帐号，那个谁去一下netlify邀请他`,
      };

      slackURL.search = new URLSearchParams(data);

      fetch(slackURL)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRequestedAccount: true,
              email: email,
            },
          });
        })
        .catch((error) => {
          alert("Error: " + error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.request {
  width: 400px;
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
}
</style>
