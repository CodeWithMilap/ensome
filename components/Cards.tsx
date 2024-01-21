// components/Cards.tsx
import React, { ReactNode } from "react";

interface CardsProps {
  icon?: ReactNode;
  children?: ReactNode;
}

const Cards: React.FC<CardsProps> = ({ icon, children }) => {
  return (
    <div className="shadow-Card2 px-9 py-11 rounded-md flex flex-col gap-7 bg-White w-full">
      {icon && <div className="text-4xl">{icon}</div>}
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default Cards;
