<script lang="ts">
  export let value: string;
  export let disabled: boolean = false;
</script>

<div class="input">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>
    <slot />
  </label>
  <input type="text" bind:value {disabled} />
</div>
