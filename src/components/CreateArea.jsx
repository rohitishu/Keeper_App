import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExtended, setExtended] = useState(false);

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

  function expand() {
    setExtended(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExtended && (
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a Note....."
          rows={isExtended ? 3 : 1}
        />
        <Zoom in={isExtended}>
          <Fab onClick={submitNote}>
            {" "}
            <AddIcon />{" "}
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
