<template>
  <div>
    <h2>My Heroes</h2>
    <div v-for="hero in heroes" :key="hero.id">
      <ListHero :hero="hero" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ListHero from "../components/ListHero.vue";

@Component({
  name: "HeroesList",
  components: {
    ListHero,
  },
})
export default class HeroesList extends Vue {
  get heroes() {
    return this.$store.state.heroes;
  }
}
</script>
