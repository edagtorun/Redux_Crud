import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { deleteTodo } from "../store/action/todoActions";
import { updatedTodo } from "../store/action/todoActions";
import api from "../utils/api";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  //silme aksiyonunu reducer'a iletmek
  const handleDelete = () => {
    api
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(deleteTodo(todo.id)))
      .catch((err) => alert("Sorry, there was an error deleting the todo."));
  };

  // tamamlanma id_done degerini tersine cevir
  const toggleIsDone = () => {
    //-todo nesnesinin is_done degerini tersine cevir
    const updated = { ...todo, is_done: !todo.is_done };

    api
      .put(`/todos/${todo.id}`, updated)
      //store'u guncellenecegini reducer'a haber ver
      .then(() => dispatch(updatedTodo(updated)))
      .catch(() => alert("sorry there is an error"));
  };

  return (
    <div className="border shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Completed" : "Continue..."}</h6>
      <p>{todo.created_at}</p>

      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Edit
      </button>
      <button onClick={toggleIsDone} className="btn btn-success mx-3">
        {todo.is_done ? "Backspace" : "Complete"}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
