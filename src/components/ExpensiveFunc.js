import { useState, useMemo } from "react";

const ExpensiveFunc = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // const calculation = useMemo(() => expensiveCalculation(count), [count]);
  const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        <button onClick={addTodo}>Add Todo</button>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default ExpensiveFunc;
