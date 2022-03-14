<script lang="ts">
  import heroesStore, { Hero } from "../store/heroes";
  import { useParams, useNavigate } from "svelte-navigator";
  import { get } from "svelte/store";
  import TfInput from "../components/TfInput.svelte";
  import { identity } from "svelte/internal";

  const params = useParams();
  const navigate = useNavigate();
  let hero: Hero;

  $: {
    const id = +get(params).id;
    hero = heroesStore.heroes.find((h) => h.id === id);
  }
</script>

{#if hero}
  <div>
    <h2>{hero.name} Details!</h2>

    <TfInput value={hero.id.toString()} disabled>ID</TfInput>
    <TfInput bind:value={hero.name}>Name</TfInput>

    <button
      disabled={!hero.name}
      on:click={() => {
        heroesStore.updateHero(hero.id, hero.name);
        navigate(-1);
      }}
      class="back-btn"
    >
      Back
    </button>
  </div>
{:else}
  <div>
    <h2>Hero was not found</h2>
  </div>
{/if}
