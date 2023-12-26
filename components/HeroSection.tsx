import React from "react";
import Button from "./Button";
import Image from "next/image";
import Title from "./Title";
import HeroImage from "../public/001_illustration.png";
import { PlayCircle } from "@/constants/Icons";

const HeroSection = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto lg:px-8 px-4">
        <div className="lg:flex items-center min-h-[566px] relative">
          <div className="order-2">
            <Image
              src={HeroImage}
              alt=""
              width={845}
              height={518}
              className="w-full"
            />
          </div>
          <div className="lg:max-w-xl w-full flex flex-col gap-8 lg:pr-2 py-5">
            <Title
              className="max-w-xl"
              title="Find true power in your data with Ensome"
              content=" Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo."
            />
            <div className="flex lg:flex-row flex-col gap-5 ">
              <Button label="Learn more" size="large" />
              <Button
                label="Watch the demo"
                size="large"
                buttonColor={"secondary"}
                icon={<PlayCircle className="lg:fill-Black fill-Primary" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
