import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import ActionTypes from "../store/action/actionTypes";
import { addTodo } from "../store/action/todoActions";
import { toast } from "react-toastify";
import api from "../utils/api";

const AddFrom = () => {
  //bu bilesen icerisinde dispatch methodunu kullanmamizi saglar.
  const dispatch = useDispatch();

  //form gonderilince;
  const handleSubmit = (e) => {
    e.preventDefault();

    //store kaydedilecek olan veriyi hazirla
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    //veriyi api'ye kaydet

    const promise = api
      .post("/todos", newTodo)
      //istek basarili olursa veriyi store'a kaydet
      .then(() => dispatch(addTodo(newTodo)))
      //istek basarisiz olursa
      .catch((err) => {
        throw new Error();
      });

    toast.promise(promise, {
      pending: "Promise is pending",
      success: "Promise resolved",
      error: "Promise rejected",
    });

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        placeholder="etc: typescript profect"
        type="text"
      />
      <button className="btn btn-warning">Gonder</button>
    </form>
  );
};

export default AddFrom;
