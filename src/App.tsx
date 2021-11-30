import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { TodoProvider } from "./store/todos-context";

function App() {
  return (
    <TodoProvider>
      <NewTodo />
      <Todos />
    </TodoProvider>
  );
}

export default App;
