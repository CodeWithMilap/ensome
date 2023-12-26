// components/Cards.tsx
import React, { ReactNode } from "react";

interface CardsProps {
  title?: string;
  content?: string;
  icon?: ReactNode;
}

const Cards: React.FC<CardsProps> = ({ title, content, icon }) => {
  return (
    <div className="shadow-Card2 px-9 py-11 rounded-md flex flex-col gap-7 bg-White">
      {icon && <div className="text-4xl">{icon}</div>}
      {title && <h2 className="text-2xl font-bold">{title}</h2>}
      {content && <p className="text-base">{content}</p>}
    </div>
  );
};

export default Cards;
