import ActionTypes from "../action/actionTypes";
/* 
! reducer
* state'in nasil degisecegine karar verir.
* Rdeucer normal bir fonksiyondur.
* Ve bu fonksiyon iki parametre akir
 
>> State: Reducer'da tutulan verilerin son durumu
>> Action : Verilerin nasil degisecegini ifade eden enesne

* useReducer'dan farkli olarak initialState'i state parameterisine varsayilan deger olarak veririzz.
*/

const initialState = {
  todos: [],
  isDarkMode: true,
  x: "",
  y: "",
};
const todoReducer = (state = initialState, action) => {
  //aksiyonnun type'ina gore gerekli guncellemeyi yapar
  switch (action.type) {
    // eger ADD aksiyonu calisirsa:
    case ActionTypes.ADD:
      return {
        ...state, //state'deki diger degeleri muhafaza et
        todos: state.todos.concat(action.payload), //ekle
      };

    //eger DELETE  aksiyonu calisirsa:
    case ActionTypes.DELETE:
      //diziden silinecek elemani kaldir
      const filtred = state.todos.filter((i) => i.id !== action.payload);

      //reducer'da tutulan todos degerini guncelle
      return { ...state, todos: filtred };

    // eger UPDATE aksiyonu calisirsa:
    case ActionTypes.UPDATE:
      // dizideki eski elemanin yerine action payload ile gelen elemani koy

      const updatedArr = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      //reducerda tutulan todosu guncelle
      return { ...state, todos: updatedArr };

    // eger SET aksiyonu calisirsa;
    case ActionTypes.SET:
      return { ...state, todos: action.payload };
    //eger yukaridakilerden biri degilse varolan state koru.
    default:
      return state;
  }
};

export default todoReducer;
