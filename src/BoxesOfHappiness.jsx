import ColorBox from "./ColorBox";
import "./BoxesOfHappiness.css";

export default function BoxesOfHappiness({ colors }) {
    return (
        <div className="BoxesOfHappiness">
            {(() => {
                const box = [];
                for (let i = 0; i < 25; i++) {
                    box.push(<ColorBox key={i} colors={colors} />);
                }
                return box;
            })()}
        </div>
    );
}
