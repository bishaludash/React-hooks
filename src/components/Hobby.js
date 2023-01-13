import { memo } from "react";

const Hobby = ({ todos, addTodo }) => {
  console.log("Hobby render");
  return (
    <>
      <h2>My Hobby</h2>
      <button onClick={addTodo}>Add Hobby</button>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Hobby);
