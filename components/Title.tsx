// components/Title.tsx

import React, { FC } from "react";

interface TitleProps {
  title: string;
  content?: string;
  className?: string;
  fontSize?: string;
}

const Title: FC<TitleProps> = ({
  title,
  content,
  className = '',
  fontSize = "lg:text-5xl text-3xl",
}) => {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <h2 className={`font-extrabold leading-tight ${fontSize}`}>{title}</h2>
      {content && (
        <p className="font-opensans text-Grey leading-snug">
          {content}
        </p>
      )}
    </div>
  );
};

export default Title;
