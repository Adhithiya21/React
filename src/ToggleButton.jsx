import React, { useState } from "react";

function ToggleButton() {
    const [ischange, setIschange] = useState("black");

    const toggleButton = () => {
        setIschange(ischange === "black" ? "green" : "black" );
    };

    return (
        <div style={{ 
            background: ischange,
         }}>
            <h2>Toggle Button</h2>
            <button onClick={toggleButton} className="text-white">
                {ischange ? "ON" : "OFF"}
            </button>
        </div>
    );
}

export default ToggleButton;