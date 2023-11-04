import { useRef } from "react";
import Bar from "./Bar";

export default function Bars({ color }) {
  const bars = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const element = useRef(null);
  const barEl = useRef(null);

  return (
    <div className="bars" ref={element}>
      {bars.map((bar, index) => (
        <Bar key={index} backgroundColor={color} i={index} />
      ))}
    </div>
  );
}
