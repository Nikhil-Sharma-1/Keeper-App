import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Fab } from "@material-ui/core";
import FavouriteNote from "./FavouriteNote";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="noteButtons">
        <Fab onClick={handleClick}>
          <DeleteIcon />
        </Fab>
      </div>
      <FavouriteNote />
    </div>
  );
}

export default Note;
