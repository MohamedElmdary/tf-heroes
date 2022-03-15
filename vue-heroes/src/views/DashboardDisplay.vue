<template>
  <div>
    <h2>Top Heroes</h2>
    <div class="dashboard-heroes">
      <DashboardHero v-for="hero in heroes" :key="hero.id" :hero="hero" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DashboardHero from "../components/DashboardHero.vue";

@Component({
  name: "Dashboard",
  components: {
    DashboardHero,
  },
})
export default class Dashboard extends Vue {
  get heroes() {
    return this.$store.getters.topHeroes;
  }
}
</script>
