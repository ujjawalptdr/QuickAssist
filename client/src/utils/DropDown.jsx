import React, { useState } from "react";
import dropdown from "./images/drop-down.png";

function Dropdown({ options, selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="relative w-full max-w-xs">
            <div
                className="flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-2 cursor-pointer shadow-sm hover:border-yellow-500 transition"
                onClick={() => setIsActive(!isActive)}
            >
                <span className="text-gray-700">{selected || "Select an option"}</span>
                <img
                    src={dropdown}
                    alt=""
                    className={`w-4 h-4 transform transition-transform duration-200 ${isActive ? "rotate-180" : "rotate-0"}`}
                />
            </div>

            {isActive && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-2 pb-4 shadow-md z-10">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                            className="px-4 py-2 hover:bg-yellow-100 text-gray-800 cursor-pointer transition"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
}

export default Dropdown;
