<template>
  <div>
    <div v-if="hero">
      <h2>{{ hero.name }} Details!</h2>

      <TfInput label="ID" :value="hero.id.toString()" disabled />
      <TfInput label="Name" v-model="hero.name" />

      <button class="back-btn" :disabled="!hero.name" @click="back()">
        Back
      </button>
    </div>

    <div v-if="!hero">
      <h2>Hero was not found</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Actions, Hero } from "../store";
import TfInput from "../components/TfInput.vue";

@Component({
  name: "HeroDisplay",
  components: {
    TfInput,
  },
})
export default class HeroDisplay extends Vue {
  hero: Hero | null = null;

  created() {
    const id = +this.$route.params.id;
    const hero = this.$store.getters.heroById(id);
    if (hero) {
      this.hero = hero;
    }
  }

  back() {
    this.$store.dispatch(Actions.UPDATE_HERO, this.hero);
    this.$router.back();
  }
}
</script>
