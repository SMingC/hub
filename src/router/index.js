import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import VideoHome from "@/views/VideoHome.vue";
import Team from "@/views/Team.vue";
import SignIn from "@/views/SignIn.vue";
import Recover from "@/views/Recover.vue";
import Request from "@/views/Request.vue";

import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    mata: {
      requiresAuth: true,
    },
  },
  {
    path: "/video",
    name: "video",
    component: VideoHome,
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover,
  },
  {
    path: "/team",
    name: "team",
    component: Team,
    mata: {
      requiresAuth: true,
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/request",
    name: "request",
    component: Request,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some((record) => {
    return record.meta.requiresAuth;
  });

  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next();
  }
});

export default router;
