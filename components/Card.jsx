"use client";
import Image from "next/image";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function Button({ text }) {
  return <button className="btn">{text}</button>;
}

export default function Card({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className="card"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <Image
        src={imagen}
        alt="image"
        width={600}
        height={400}
        priority
        className="object-contain -mt-[20%] w-[700px] h-[500px]"
      />
    </animated.div>
  );
}
