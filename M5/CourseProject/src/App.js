import { useState } from 'react'
import short from 'short-uuid'
import Notes from './components/Notes'

import './App.css';

const INITIAL_NOTES = [
  { id: short.generate(), name: 'Frameworks Homework', done: true },
  { id: short.generate(), name: 'Mobile Dev Homework', done: false },
  { id: short.generate(), name: 'Listen to Lex Podcast', done: false },
  { id: short.generate(), name: 'Plants Need Watering', done: false }
]

function App() {

  const [noteInput, setnoteInput] = useState('')
  const [notes, setNotes] = useState(INITIAL_NOTES)

  function AddNote(e) {
    e.preventDefault()

    if (!noteInput || notes.some(n => n.name === noteInput)) return

    const uuid = short.generate()
    const newNote = { id: uuid, name: noteInput, done: false, pinned: false }
    const updatedNotes = [...notes, newNote]
    setNotes(updatedNotes)
    setnoteInput('')
  }

  return (
    <div className="App">
      <header>
        <h1>NoteTaker</h1>
      </header>
      <form onSubmit={(e) => AddNote(e)}>
        <input
          type="text"
          placeholder="Note Name"
          value={noteInput}
          onChange={(e) => setnoteInput(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App
