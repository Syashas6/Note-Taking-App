import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, getNoteList] = useState([
    {
      title: "",
      content: ""
    }
  ]);

  function takeNote(note) {
    // console.log(note)
    // console.log(noteList)
    getNoteList((prevNotes) => {
      if (note !== null) {
        return [...prevNotes, note];
      } else {
        return [...prevNotes];
      }
    });
  }

  function deleteNote(id) {
    getNoteList((prevNoteList) => {
      return prevNoteList.filter((nto, index) => {
        return index !== id;
      });
    });
  }

  function addNote(nto, index) {
    if (index !== 0) {
      return (
        <Note
          key={index}
          id={index}
          title={nto.title}
          content={nto.content}
          deleteNote={deleteNote}
        />
      );
    }
  }

  return (
    <div>
      <Header />
      <CreateArea takeNote={takeNote} />
      {noteList.map(addNote)}
      <Footer />
    </div>
  );
}

export default App;
