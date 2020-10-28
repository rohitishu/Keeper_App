import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.addNote(note);

    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a Note....."
          rows="3"
        />
        <button onClick={submitNote}> Add </button>
      </form>
    </div>
  );
}

export default CreateArea;
