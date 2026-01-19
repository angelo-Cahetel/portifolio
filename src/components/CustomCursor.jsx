import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import cursorIcon from "../assets/img/Cursor.svg";

const CustomCursor = () => {
  const cursorRef = useRef(null);
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
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !cursorRef.current) return;

    // Configura o ponto de pivô para o centro do elemento
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    // quickTo é otimizado para atualizações frequentes como movimento do mouse
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.2,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.2,
      ease: "power3",
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  // Não renderiza o cursor personalizado em dispositivos móveis
  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none w-20 h-20 z-[99999]"
    >
      <img
        src={cursorIcon}
        alt="Cursor personalizado"
        className="w-full h-full"
      />
    </div>
  );
};

export default CustomCursor;
