import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import VideoHome from "@/views/VideoHome.vue";
import SignIn from "@/views/SignIn.vue";
import Recover from "@/views/Recover.vue";
import Request from "@/views/Request.vue";
import Courses from "@/views/Courses/ReactCourses.vue";
import Advanced_react from "@/views/CoursesHome/Advanced_react.vue";

import * as netlifyIdentityWidget from "netlify-identity-widget";

const Team = () => import("@/views/Team.vue");
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
    path: "/advanced_react",
    name: "Advanced_react",
    component: Advanced_react,
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
    path: "/course",
    name: "course",
    component: Courses,
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
