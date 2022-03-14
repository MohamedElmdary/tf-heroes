<script lang="ts">
  import { Link, link } from "svelte-navigator";
  import DashboardHero from "./DashboardHero.svelte";
  import heroesStore from "../../store/heroes";
</script>

<h2>Top Heroes</h2>
<div class="dashboard-heroes">
  {#each heroesStore.topHeroes as hero}
    <DashboardHero {hero} />
  {/each}
</div>
