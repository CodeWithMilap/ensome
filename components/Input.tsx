// Input.tsx
import React from "react";

interface InputProps {
  label: string;
  name: string;
  id: string;
  type: string;
  autoComplete: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  id,
  type,
  autoComplete,
}) => {
  return (
    <div className="">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-Grey"
      >
        {label}
      </label>
      <div className="">
        <input
          type={type}
          name={name}
          id={id}
          autoComplete={autoComplete}
          className="block w-full text-sm border-0 py-1.5 placeholder:text-Grey border-b border-Grey outline-none font-bold"
        />
      </div>
    </div>
  );
};

export default Input;
