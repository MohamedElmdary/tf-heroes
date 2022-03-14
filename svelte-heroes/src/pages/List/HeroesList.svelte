<script lang="ts">
  import heroesStore from "../../store/heroes";

  import ListHero from "./ListHero.svelte";
</script>

<h2>My Heroes</h2>
{#each heroesStore.heroes as hero}
  <div>
    <ListHero {hero} />
  </div>
{/each}
