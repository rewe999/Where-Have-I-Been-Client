import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import( "../views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import( "../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import( "../views/Register.vue")
  },
  {
    path: "/feed",
    name: "Feed",
    component: () => import( "../views/Feed.vue")
  },
  {
    path: "/community",
    name: "Community",
    component: () => import( "../views/Community.vue")
  },
  {
    path: "/community/users",
    name: "CommunityUsers",
    component: () => import( "../views/CommunityuUser.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
