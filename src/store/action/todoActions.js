//! aksiyon nesnesi olusturan fonksiyon
// payload degeri dinamik olacagi icin fonksiyonlari tercih ettik ve payload degerini parametre olarak aldik.
import ActionTypes from "./actionTypes";

export const deleteTodo = (payload) => {
  return {
    type: ActionTypes.DELETE,
    payload,
  };
};

export const updatedTodo = (payload) => {
  return {
    type: ActionTypes.UPDATE,
    payload,
  };
};

export const addTodo = (payload) => ({
  type: ActionTypes.ADD,
  payload,
});
export const setTodos = (payload) => ({
  type: ActionTypes.SET,
  payload,
});
