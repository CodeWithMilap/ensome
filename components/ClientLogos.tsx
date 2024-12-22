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
    </Section>
  );
};

export default ClientLogos;
