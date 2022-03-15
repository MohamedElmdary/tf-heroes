import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Dashboard from "@/views/DashboardDisplay.vue";
import HeroesList from "@/views/HeroesList.vue";
import Hero from "@/views/HeroDisplay.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/heroes",
    name: "heroes",
    component: HeroesList,
  },
  {
    path: "/hero/:id",
    name: "hero",
    component: Hero,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
