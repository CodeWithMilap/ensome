// components/ClientLogos.tsx

import Image from "next/image";
import React from "react";

interface ClientLogosProps {
  logos: string[];
}

const ClientLogos: React.FC<ClientLogosProps> = ({ logos }) => {
  return (
    <section className="client-logos">
      <div className="max-w-screen-xl mx-auto lg:px-8 px-6">
        <div className="flex justify-between">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={`/logos/${logo}`}
              alt={`Client Logo`}
              width={185}
              height={132}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
