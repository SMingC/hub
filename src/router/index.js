import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import VideoHome from "@/views/VideoHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/video",
    name: "video",
    component: VideoHome,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
