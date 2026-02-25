import React, { useState, useEffect, use } from "react";

const MovingBlur = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    let direction = { x: 2, y: 2 };
    const move = () => {
      setPosition((prev) => {
        let nextX = prev.x + direction.x;
        let nextY = prev.y + direction.y;

        if (nextX < 0 || nextX > window.innerWidth - 200) direction.x *= -1;
        if (nextY < 0 || nextY > window.innerHeight - 180) direction.y *= -1;

        return {
          x: prev.x + direction.x,
          y: prev.y + direction.y,
        };
      });
    };

    const interval = setInterval(move, 10);
    return () => clearInterval;
  }, []);

  return (
    <div
      className="w-50 h-45 rotate-[227.58deg] bg-[#0000ff] blur-[100px]"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%) rotate(227.58deg)",
        pointerEvents: "none",
      }}
    />
  );
};

export default MovingBlur;
