<template>
  <dir>
    <div class="list-hero" @click="$router.push('/hero/' + hero.id)">
      <span>{{ hero.id }}</span>
      <p>{{ hero.name }}</p>
    </div>
  </dir>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Hero } from "../store";

@Component({
  name: "ListHero",
})
export default class ListHero extends Vue {
  @Prop({ required: true }) public hero!: Hero;
}
</script>
