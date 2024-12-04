import React from "react";

interface DynamicButtonProps {
    label: string;
    onClick: () => void;
    type?: "primary" | "secondary";
    color: string
    // Dynamic holat
}

const DynamicButton: React.FC<DynamicButtonProps> = ({ label, color, onClick, type = "primary" }) => {
    const getClassName = () => {
        return type === "primary" ? "btn-primary" : "btn-secondary";
    };

    return (
        <button style={{
            color: color
        }} className={getClassName()} onClick={() => onClick} >
            {label}
        </button>
    );
};

export default DynamicButton;
