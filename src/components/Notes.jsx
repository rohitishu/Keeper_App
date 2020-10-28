import React from "react";

function Notes(props) {
  function onsubmit() {
    props.onDelete(props.id);
  }
  return (
    <div class="note">
      <h1> {props.title} </h1>
      <p> {props.content} </p>
      <button onClick={onsubmit}> DELETE </button>
    </div>
  );
}

export default Notes;
