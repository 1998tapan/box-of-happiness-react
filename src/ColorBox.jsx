import { useState } from "react";
import "./ColorBox.css";

export default function ColorBox({ colors }) {
    const randomColor = () => {
        const randomInt = Math.floor(Math.random() * colors.length);
        return colors[randomInt];
    };

    const [bgColor, setBgColor] = useState(randomColor());

    const handleBg = () => {
        setBgColor(randomColor());
    };

    return (
        <div
            className="ColorBox"
            onClick={handleBg}
            style={{ backgroundColor: bgColor }}
        ></div>
    );
}
