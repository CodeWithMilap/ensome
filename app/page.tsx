import ClientLogos from "@/components/ClientLogos";
import HeroSection from "@/components/HeroSection";
import Cards from "@/components/Cards";
import { BrainCircuit, PlayCircle } from "@/constants/Icons";
import Title from "@/components/Title";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";
import Image1 from "../public/002_illustration.png";
import Image2 from "../public/003_llustration.png";
import Link from "next/link";

export default function Home() {
  const clientLogos = [
    "logo_1.png",
    "logo_2.png",
    "logo_3.png",
    "logo_4.png",
    "logo_5.png",
    "logo_6.png",
  ];

  return (
    <main className="">
      <HeroSection />

      <ClientLogos logos={clientLogos} />

      <Section className="bg-Background lg:py-24 py-12">
        <div className="flex flex-col gap-14">
          <Title
            className="max-w-lg text-center mx-auto"
            title="Why our clients choose Ensome?"
            content="Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          />

          <div className="flex gap-8 lg:flex-row flex-col">
            <Cards icon={<BrainCircuit />}>
              <Title
                fontSize="text-2xl"
                title="Machine learning"
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
              />
            </Cards>
            <Cards icon={<BrainCircuit />}>
              <Title
                fontSize="text-2xl"
                title="Embed analytics"
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
              />
            </Cards>
            <Cards icon={<BrainCircuit />}>
              <Title
                fontSize="text-2xl"
                title="Access control"
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
              />
            </Cards>
          </div>
        </div>
      </Section>

      <Section className="lg:py-12 py-6">
        <div className="lg:flex items-center relative lg:gap-24 gap-12">
          <div className="order-2">
            <Image
              src={Image1}
              alt=""
              width={766}
              height={590}
              className="w-full"
            />
          </div>
          <div className="lg:max-w-xl w-full flex flex-col gap-8 lg:pr-2 py-5">
            <Title
              className="max-w-xl"
              title="The newest business analytics platform"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            <div className="flex lg:flex-row flex-col gap-5 ">
              <Button label="Learn more" size="large" />
            </div>
          </div>
        </div>
      </Section>

      <Section className="lg:py-12 py-6">
        <div className="lg:flex items-center relative lg:gap-24 gap-12">
          <div className="">
            <Image
              src={Image2}
              alt=""
              width={766}
              height={590}
              className="w-full"
            />
          </div>
          <div className="lg:max-w-xl w-full flex flex-col gap-8 lg:pr-2 py-5">
            <Title
              className="max-w-xl"
              title="Radically new data solutions"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            <div className="flex lg:flex-row flex-col gap-5 ">
              <Button label="Learn more" size="large" />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-Background lg:py-24 py-12">
        <div className="flex flex-col gap-14">
          <Title className="text-center" title="Glad to help your success" />

          <div className="flex gap-8 lg:flex-row flex-col">
            <Cards>
              <div className="text-Grey text-sm">22 June 2020</div>
              <Title
                fontSize="text-2xl"
                title="Sed ut perspiciatis unde omnis at vero blanditils"
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... "
              />
              <div className="flex gap-2">
                <Link
                  href={"#"}
                  className="text-Primary text-sm font-extrabold border border-Background rounded-md px-2 py-1"
                >
                  Proxy
                </Link>
                <Link
                  href={"#"}
                  className="text-Primary text-sm font-extrabold border border-Background rounded-md px-2 py-1"
                >
                  VPN
                </Link>
              </div>
            </Cards>

            <Cards>
              <div className="text-Grey text-sm">22 June 2020</div>
              <Title
                fontSize="text-2xl"
                title="Sed ut perspiciatis unde omnis at vero blanditils"
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... "
              />
              <div className="flex gap-2">
                <Link
                  href={"#"}
                  className="text-Primary text-sm font-extrabold border border-Background rounded-md px-2 py-1"
                >
                  Proxy
                </Link>
                <Link
                  href={"#"}
                  className="text-Primary text-sm font-extrabold border border-Background rounded-md px-2 py-1"
                >
                  VPN
                </Link>
              </div>
            </Cards>

            <Cards>
              <div className="text-Grey text-sm">22 June 2020</div>
              <Title
                fontSize="text-2xl"
                title="Sed ut perspiciatis unde omnis at vero blanditils"
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... "
              />
              <div className="flex gap-2">
                <Link
                  href={"#"}
                  className="text-Primary text-sm font-extrabold border border-Background rounded-md px-2 py-1"
                >
                  Proxy
                </Link>
                <Link
                  href={"#"}
                  className="text-Primary text-sm font-extrabold border border-Background rounded-md px-2 py-1"
                >
                  VPN
                </Link>
              </div>
            </Cards>
          </div>

          <div className="flex items-center justify-center">
            <Button label="Learn more" size="large" />
          </div>
        </div>
      </Section>
    </main>
  );
}
