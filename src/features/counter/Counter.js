import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.coounter.Value);
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <span>Count: {count}</span>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        In3
      </button>
    </>
  );
}
