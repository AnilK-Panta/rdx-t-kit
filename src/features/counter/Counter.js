import { useState } from "react";

export default function Counter() {
  const [Value, setValue] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setValue(Value + 1);
        }}
      >
        +
      </button>
      <span>Count: {Value}</span>
      <button
        onClick={() => {
          setValue(Value - 1);
        }}
      >
        -
      </button>
    </>
  );
}
