import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// eslint-disable-next-line no-undef, no-unused-vars
const baseUrl = process.env.BASE_URL;
console.log("baseUrl", baseUrl);
const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});
console.log("router", router);
export default router;
