import { writable } from 'svelte/store';

export const notes = writable([
  { id: 1, text: 'Example Note 1', complete: false },
  { id: 2, text: 'Example Note 2', complete: true },
]);

export function addNote() {
  notes.update((currentNotes) => {
    const newId = currentNotes.length > 0 ? currentNotes[currentNotes.length - 1].id + 1 : 1;
    return [...currentNotes, { id: newId, text: '', complete: false }];
  });
}
 