import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Notes from "./Notes";

function App() {
  const [note, setNote] = useState([]);

  function addNote(inputNote) {
    setNote((prevValue) => {
      return [...prevValue, inputNote];
    });
  }

  function onDelete(id) {
    setNote((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {note.map((noteItem, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
