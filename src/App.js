import { useState, useCallback } from "react";
import Todos from "./components/Todos";
import Hobby from "./components/Hobby";
import Food from "./components/Food";
import ExpensiveFunc from "./components/ExpensiveFunc";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  return (
    <div>
      {/* memo */}
      {/* <Food />
      <hr /> */}
      {/* === */}

      {/* memo */}
      {/* <h2>My Todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      <Todos todos={todos} />
      <hr /> */}
      {/* ==== */}

      {/* memo and useCallback */}
      {/* <Hobby todos={todos} addTodo={addTodo} />
      <hr /> */}
      {/* ==== */}

      {/* <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div> */}
      {/* ==== */}

      {/* useMemo */}
      <ExpensiveFunc />
    </div>
  );
};

export default App;
