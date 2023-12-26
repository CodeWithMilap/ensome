import React from "react";
import Button from "./Button";
import Image from "next/image";

import HeroImage from "../public/001_illustration.png";
import { PlayCircle } from "@/constants/Icons";

const HeroSection = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto lg:px-8 px-6">
        <div className="flex items-center min-h-[566px] relative">
          <div className="max-w-xl flex flex-col gap-8 pr-2">
            <h2 className="text-5xl font-extrabold leading-tight">
              Find true power in your data with Ensome
            </h2>
            <p className="text-xl font-opensans text-Grey leading-snug">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex gap-5 ">
              <Button label="Learn more" size="large" />
              <Button
                label="Watch the demo"
                size="large"
                buttonColor={"secondary"}
                icon={<PlayCircle className="fill-Black" />}
              />
            </div>
          </div>
          <div className="">
            <Image src={HeroImage} alt="" width={845} height={518} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
