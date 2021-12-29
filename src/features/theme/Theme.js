import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./ThemeSlice";
export default function Theme() {
  const [color, setColor] = useState("white");
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Change Color
      </button>
    </div>
  );
}
