// components/ClientLogos.tsx

import Image from "next/image";
import React from "react";
import Section from "./Section";

interface ClientLogosProps {
  logos: string[];
}

const ClientLogos: React.FC<ClientLogosProps> = ({ logos }) => {
  return (
    <Section>
      <div className="grid grid-cols-6">
        {logos.map((logo, index) => (
          <div
            className="lg:col-span-1 col-span-2 flex items-center justify-center"
            key={index}
          >
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
    </Section>
  );
};

export default ClientLogos;
