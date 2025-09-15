import React, { useState, useEffect } from "react";
import cursor from "../assets/img/cursor.svg";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.pageX, y: e.pageY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="absolute">
            <img 
            src={cursor} 
            alt="Imagem que segue o cursor" 
            className="pointer-events-none fixed z-50"
            style={{
                left: position.x,
                top: position.y,
                // transform: "translate(50%, 50%)",
            }}
            width={100}
            height={100}
            />
        </div>
    );
};

export default CustomCursor;