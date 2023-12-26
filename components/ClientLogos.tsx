// components/ClientLogos.tsx

import Image from "next/image";
import React from "react";

interface ClientLogosProps {
  logos: string[];
}

const ClientLogos: React.FC<ClientLogosProps> = ({ logos }) => {
  return (
    <section className="client-logos">
      <div className="max-w-screen-xl mx-auto lg:px-8 px-4">
        <div className="grid grid-cols-6">
          {logos.map((logo, index) => (
            <div className="lg:col-span-1 col-span-2 flex items-center justify-center" key={index}>
              <Image
                src={`/logos/${logo}`}
                className="w-full"
                alt={`Client Logo`}
                width={185}
                height={132}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
