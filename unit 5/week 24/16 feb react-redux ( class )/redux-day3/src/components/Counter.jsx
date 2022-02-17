import { useSelector, useDispatch } from "react-redux";
import { incCount } from "../redux/actions";

export const Counter = () => {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();
  console.log("re-rendered Counter");

  return (
    <div className="App">
      Count: {count}
      <button
        onClick={() => {
          dispatch(incCount(1));
        }}
      >
        Add 1
      </button>
    </div>
  );
};
