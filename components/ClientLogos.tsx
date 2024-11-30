// components/ClientLogos.tsx

import Image from "next/image";
import React from "react";
import Section from "./PixelBlock/Section";
import MarqueeImageScroller from "./PixelBlock/MarqueeImageScroller";
import { marqueeImages } from "@/data/data";

interface ClientLogosProps {
  logos: string[];
}

const ClientLogos: React.FC<ClientLogosProps> = ({ logos }) => {
  return (
    <Section>
      <MarqueeImageScroller images={marqueeImages} />

      {/* <div className="grid grid-cols-6">
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
      </div> */}
    </Section>
  );
};

export default ClientLogos;
