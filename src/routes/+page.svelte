<script>
  import { onMount } from 'svelte';
  import Note from '$lib/Note.svelte';
  import { notes, addNote } from '$lib/notes.js'; // Import the store and update function

  function removeNote(id) {
    notes.update((currentNotes) => {
      return currentNotes.filter((note) => note.id !== id);
    });
  }

  onMount(() => {
    // Perform any necessary actions when the component is mounted
  });
</script>

<div class="note-container">
  {#each $notes as note, index}
    <!-- Pass the note object and removeNote function to the Note component -->
    <Note noteProps={note} removeNote={() => removeNote(note.id)} />
  {/each}
</div>

<button on:click={addNote}>Add Note</button>
