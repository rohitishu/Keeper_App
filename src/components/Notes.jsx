import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Notes(props) {
  function onsubmit() {
    props.onDelete(props.id);
  }
  return (
    <div class="note">
      <h1> {props.title} </h1>
      <p> {props.content} </p>
      <button onClick={onsubmit}>
        {" "}
        <DeleteIcon />{" "}
      </button>
    </div>
  );
}

export default Notes;
