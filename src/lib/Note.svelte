<script>
  export let noteProps;
  export let removeNote; // New prop to receive the removeNote function from the parent
</script>

<div class="note">
  {#if !noteProps.complete}
    <input type="text" bind:value={noteProps.text}>
  {:else}
    <p><s>{noteProps.text}</s></p>
  {/if}
  <button on:click={() => noteProps.complete = !noteProps.complete}>
    {noteProps.complete ? 'Modify' : 'Complete'}
  </button>
  <button on:click={removeNote}>Remove</button> <!-- Call the removeNote function -->
  <button on:click={() => console.log(noteProps)}>Show props</button>
</div>

<style>
  .note {
    display: flex;
  }
</style>
