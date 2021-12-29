import { useSelector } from "react-redux";
export default function Coin() {
  const value = useSelector((state) => state.coounter.Value);
  const color = useSelector((state) => state.color.color);
  return (
    <>
      <span
        style={{
          color: color,
        }}
      >
        Count: {value}
      </span>
    </>
  );
}
