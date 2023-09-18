import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

import { MdAdd } from "react-icons/md";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        setOpenModal(!openModal);
      }}
    >
      <MdAdd />
    </button>
  );
}

export { CreateTodoButton };
