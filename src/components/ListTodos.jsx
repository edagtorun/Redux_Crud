import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  //store'daki verilere abone olma
  // ! direkt store'u return edince uyari verir.
  //Genelde sadece ihtiyacimiz olan reducer'a abone oluruz.
  const storeState = useSelector((store) => store.todoReducer);

  return (
    <div>
      {storeState.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
