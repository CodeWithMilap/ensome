// components/CountCard.tsx
import React from "react";

interface CountCardProps {
  count: string | number;
  title: string;
  className?: string;
}

const CountCard: React.FC<CountCardProps> = ({
  count,
  title,
  className = "",
}) => {
  return (
    <div className={`flex justify-center w-full p-6 ${className}`}>
      <div className="flex flex-col gap-5 text-center">
        <h2 className="lg:text-5xl text-3xl font-extrabold">{count}</h2>
        <h4 className="font-semibold">{title}</h4>
      </div>
    </div>
  );
};

export default CountCard;
