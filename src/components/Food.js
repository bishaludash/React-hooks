import { memo } from "react";

const Food = () => {
  console.log("food called");
  return <div>Food</div>;
};

export default memo(Food);
// export default Food;
