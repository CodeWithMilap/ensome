import React from "react";
import Image from "next/image";
import Title from "./PixelBlock/Title";
import HeroImage from "../public/001_illustration.png";
import { PlayCircle } from "@/constants/Icons";
import Section from "./PixelBlock/Section";
import Button from "./PixelBlock/Button";
import Grid from "./PixelBlock/Grid";

const HeroSection = () => {
  return (
    <Section>
      <Grid
        columns={2}
        gap={12}
        alignItems="center"
        alignContent="center"
        className="min-h-[566px] relative"
      >
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
            fontWeight="xl"
            as={"h1"}
            title={
              <>
                Find true power in your data with{" "}
                <span className="text-primary-500">Ensome</span>
              </>
            }
          />
          <p className=" lg:text-lg max-w-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="flex lg:flex-row flex-col gap-5 ">
            <Button size="lg">Learn more</Button>
            <Button
              size="lg"
              variant="ghost"
              icon={<PlayCircle className="lg:fill-Black fill-primary-500" />}
            >
              Watch the demo
            </Button>
          </div>
        </div>
      </Grid>
    </Section>
  );
};

export default HeroSection;
