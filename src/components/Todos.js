import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("Todo render");
  return (
    <>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);
