<template>
  <div class="dashboard-hero" @click="$router.push('/hero/' + hero.id)">
    <div>{{ hero.name }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Hero } from "../store";

@Component({
  name: "DashboardHero",
})
export default class DashboardHero extends Vue {
  @Prop({ required: true }) public hero!: Hero;
}
</script>
