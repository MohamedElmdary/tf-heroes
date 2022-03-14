<script lang="ts">
  import type { Hero } from "../../store/heroes";
  import { useNavigate } from "svelte-navigator";

  export let hero: Hero;
  const navigate = useNavigate();
</script>

<div class="list-hero" on:click={() => navigate("/hero/" + hero.id)}>
  <span>{hero.id}</span>
  <p>{hero.name}</p>
</div>
