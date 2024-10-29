// components/NoteForm.js
import React, { useState, useEffect } from 'react';
import './NoteForm.css';

function NoteForm({ addNote, currentNote, updateNote }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (currentNote) {
      setText(currentNote.text);
    } else {
      setText('');
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentNote) {
      updateNote(currentNote.id, text);
    } else {
      addNote(text);
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">{currentNote ? 'Update' : 'Add'} Note</button>
    </form>
  );
}

export default NoteForm;
