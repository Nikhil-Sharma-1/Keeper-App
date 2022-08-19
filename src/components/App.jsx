import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Count from "./Count";

const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  if(list) {
    return JSON.parse(localStorage.getItem('lists'));
  } else {
    return [];
  }
}

function App() {
  const notify = () => toast('Note trashed',
  {
    style: {
      borderRadius: '6px',
      background: '#333',
      color: '#fff',
    },
  });

  const [notes, setNotes] = useState(getLocalItems());

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    notify();
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(notes))
  }, [notes]); //If any change happens in notes array, it will execute...

  return (
    <div>
      <Toaster 
       position="bottom-left"
       reverseOrder={false}
       />
      <Header />
      <Count count={notes.length === 0 ? "Empty" : `Showing ${notes.length} Notes in Database`}/>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
