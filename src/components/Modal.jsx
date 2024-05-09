import { useRef } from "react";
import { useDispatch } from "react-redux";
import ActionTypes from "../store/action/actionTypes";
import { updatedTodo } from "../store/action/todoActions";
import api from "../utils/api";

const Modal = ({ close, todo }) => {
  const inputRef = useRef();

  const dispatch = useDispatch();
  const handleClick = (e) => {
    //1. inputtaki degeri al
    const newText = inputRef.current.value;

    //2. todo nesnesinin title degerini güncelle
    const updatedTodoData = {
      ...todo,
      text: newText,
      created_at: new Date().toLocaleDateString(),
    };

    //3. api'ye güncel veriyi kaydet
    api
      .put(`/todos/${todo.id}`, updatedTodoData)
      .then(() => {
        //4. reducer'a elemanin güncellenecegini haber ver
        dispatch(updatedTodo(updatedTodoData));
        //5. modali kapat
        close();
      })
      .catch((err) => alert("Sorry, there was an error updating the todo."));
  };

  return (
    <div className="modal d-block text-dark  bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header ">
            <h5 className="modal-title">Update Todo</h5>
          </div>
          <div className="modal-body my-2">
            <label> New Title</label>
            <input
              ref={inputRef}
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-primary"
            >
              Save changes
            </button>
            <button
              onClick={close}
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
