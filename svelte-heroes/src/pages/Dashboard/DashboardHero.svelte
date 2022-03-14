<script lang="ts">
  import type { Hero } from "../../store/heroes";
  import { useNavigate } from "svelte-navigator";

  export let hero: Hero;
  const navigate = useNavigate();
</script>

<div class="dashboard-hero" on:click={() => navigate("/hero/" + hero.id)}>
  <div>{hero.name}</div>
</div>
