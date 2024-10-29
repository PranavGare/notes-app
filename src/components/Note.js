// components/Note.js
import React from 'react';
import './Note.css';

function Note({ note, onEdit, onDelete }) {
  return (
    <div className="note">
      <p>{note.text}</p>
      <div className="note-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Note;
