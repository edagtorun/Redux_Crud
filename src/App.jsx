import React, { useEffect } from "react";
import AddFrom from "./components/AddFrom";
import ListTodos from "./components/ListTodos";

import { useDispatch } from "react-redux";
import ActionTypes from "./store/action/actionTypes";
import { setTodos } from "./store/action/todoActions";
import api from "./utils/api";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //kullanici sayfaya girince api'a kaydedilmis olan todolari al
    api
      .get("/todos")
      //verileri store'a aktar
      .then((res) => dispatch(setTodos(res.data)));
  }, []);
  return (
    <div className="vh-100 bg-dark text-white vw-100">
      <div className="container py-5 my-auto">
        <h2 className="text-center mb-4">
          REDUX <span className="text-warning">CRUD</span>
        </h2>

        <AddFrom />

        <ListTodos />
      </div>
    </div>
  );
};

export default App;
