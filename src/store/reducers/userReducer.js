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
  users: [],
  x: "",
  y: "",
};
const userReducer = (state = initialState, action) => {
  //aksiyonnun type'ina gore gerekli guncellemeyi yapar
  switch (action.type) {
    case "EKLE":
      return state;

    case "CIKAR":
      return state;

    //eger yukaridakilerden biri degilse varolan state koru.
    default:
      return state;
  }
};

export default userReducer;
