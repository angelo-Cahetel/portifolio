import React, { useState, useEffect } from "react";
import cursor from "../assets/img/cursor.svg";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta se é dispositivo móvel
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Não renderiza o cursor personalizado em dispositivos móveis
  if (isMobile) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        width: 80,
        height: 80,
        zIndex: 99999,
      }}
    >
      <img
        src={cursor}
        alt="Imagem que segue o cursor"
        className="w-full h-full"
      />
    </div>
  );
};

export default CustomCursor;
