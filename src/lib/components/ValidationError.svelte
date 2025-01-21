<script lang="ts">
  export let errors: string[] = [];
</script>

{#if errors.length > 0}
  <ul class="error-list">
    {#each errors as error}
      <li>{error}</li>
    {/each}
  </ul>
{/if}

<style>
  .error-list {
    color: red;
  }
</style>
