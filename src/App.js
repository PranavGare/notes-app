// App.js
import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = (text) => {
    const newNote = { id: Date.now(), text };
    setNotes([newNote, ...notes]);
  };

  // Update a note
  const updateNote = (id, newText) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, text: newText } : note)));
    setCurrentNote(null);
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <NoteForm
        addNote={addNote}
        currentNote={currentNote}
        updateNote={updateNote}
      />
      <div className="notes-container">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onEdit={() => setCurrentNote(note)}
            onDelete={() => deleteNote(note.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
