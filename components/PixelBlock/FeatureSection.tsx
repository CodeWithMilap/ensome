import Image, { StaticImageData } from "next/image";
import Title from "@/components/PixelBlock/Title";
import Button from "@/components/PixelBlock/Button";
import Section from "@/components/PixelBlock/Section";
import Grid from "@/components/PixelBlock/Grid";

type FeatureSectionProps = {
  blok: {
    imageSrc: string | StaticImageData;
    title: string;
    content: string;
    index: number; // Use index to alternate layout
  };
};

const FeatureSection = ({ blok }: FeatureSectionProps) => {
  const isEven = blok.index % 2 === 0;

  return (
    <Section className="lg:py-12 py-6">
      <Grid columns={2} gap={24} alignItems="center" alignContent="center">
        <div className={`${isEven ? "" : "lg:order-2"}`}>
          <Image
            src={blok.imageSrc}
            alt={blok.title}
            width={766}
            height={590}
            className="w-full"
          />
        </div>
        <div className="lg:max-w-xl w-full flex flex-col gap-8 lg:pr-2 py-5">
          <Title
            className="max-w-xl"
            title={blok.title}
            content={blok.content}
          />
          <div className="flex lg:flex-row flex-col gap-5">
            <Button size="lg">Learn more</Button>
          </div>
        </div>
      </Grid>
    </Section>
  );
};

export default FeatureSection;
