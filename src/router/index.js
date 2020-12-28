import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import( "../views/Home.vue")
  },
  {
    path: '/chooseTrip',
    name: 'chooseTrip',
    component: () => import( '../views/Map/ChoosePlaceTrip.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
