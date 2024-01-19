import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatsPage from "../views/CatsPage.vue";
import DogsPage from "../views/DogsPage.vue";
import PetPage from "../views/PetPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cats",
    name: "catsPage",
    component: CatsPage,
  },
  {
    path: "/dogs",
    name: "dogsPage",
    component: DogsPage,
  },
  {
    path: "/pet",
    name: "petPage",
    component: PetPage,
  },
];

const router = createRouter({
  history: createWebHistory("http://localhost:8080/"),
  routes,
});

export default router;
