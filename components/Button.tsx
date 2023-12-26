// components/Button.tsx

import React from "react";
import Link from "next/link";

interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  textColor?: string;
  buttonColor?: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode; // New property for the icon
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  buttonColor = "primary",
  onClick,
  href,
  icon, // New icon property
}) => {
  const buttonSizeClasses = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-4 py-3",
    large: "text-base px-11 py-4 font-bold",
  };

  const buttonColorClasses = {
    primary:
      "bg-Primary text-White hover:shadow-Button hover:bg-opacity-90 focus:shadow-none focus:bg-Primary",
    secondary: "bg-Secondary hover:shadow-Button",
  };

  return (
    <div>
      {href ? (
        <Link
          href={href}
          className={`flex ${buttonSizeClasses[size]} ${buttonColorClasses[buttonColor]} disabled:bg-Grey rounded-md transition duration-300 ease-in-out`}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {label}
        </Link>
      ) : (
        <button
          type="button"
          className={`flex items-center ${buttonSizeClasses[size]} ${buttonColorClasses[buttonColor]} rounded-md transition duration-300 ease-in-out`}
          onClick={onClick}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {label}
        </button>
      )}
    </div>
  );
};

export default Button;
