// components/Title.tsx

import React, { FC } from 'react';

interface TitleProps {
  title: string;
  content: string;
  className?: string;
}

const Title: FC<TitleProps> = ({ title, content, className }) => {
  return (
    <div className={`mx-auto  flex flex-col gap-6 ${className}`}>
      <h2 className="lg:text-5xl text-3xl font-extrabold leading-tight">
        {title}
      </h2>
      <p className="text-xl font-opensans text-Grey leading-snug">
        {content}
      </p>
    </div>
  );
};

export default Title;
