/*
! store olusturma
* 1. redux kutuphanesinden 'creatStore' methodu import edilir.
* 2. Store icerisinde tutulacak olan her bir veri icin reducerlar olusturulur.
* 3. olusturulan reducerlar 'combineReducers' ile birlestirilir.
$. Store'a olusan birlestirilen reducerlar tanitilir.
*/
import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import todoReducer from "./reducers/todoReducer";

//birden fazla reducer varsa bunlari birlestiririz

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

const store = createStore(rootReducer); //store olusturulur.

export default store; // projeye tanitmak icin export ederiz.
