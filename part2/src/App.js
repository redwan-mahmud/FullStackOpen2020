import React, {useState, useEffect} from 'react';
import Note from './components/Note'
//import axios from 'axios'
import noteService from './services/notes'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    "a new note..."
  )
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes:notes.filter(note => note.imporant === true)

  useEffect(() =>{
    //console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])
  //console.log('render',notes.length,'notes')

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject ={
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random()<0.5,
      //id: notes.length +1
    }
    //
    
    noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  }
  //console.log(addnote.important)

  const handleNoteChange =(event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  const toggleImportanceOf = id => {
    //const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note,important : !note.important}

    noteService
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
  }
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note,i) => 
        <Note 
          key = {i} 
          note ={note}
          toggleImportance ={() => toggleImportanceOf(note.id)}/>)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type = "submit">save</button>
      </form>
    </div>
  )
}

export default App;
