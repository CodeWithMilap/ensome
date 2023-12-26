import ClientLogos from "@/components/ClientLogos";
import HeroSection from "@/components/HeroSection";
import Cards from "@/components/Cards";
import { BrainCircuit } from "@/constants/Icons";
import Title from "@/components/Title";
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

      <section className="bg-Background lg:py-24 py-12">
        <div className="max-w-screen-xl mx-auto lg:px-8 px-6">
          <div className="flex flex-col gap-14">
            <Title
              className="max-w-lg text-center"
              title="Why our clients choose Ensome?"
              content="Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />

            <div className="flex gap-8 lg:flex-row flex-col">
              <Cards
                title="Machine learning"
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
                icon={<BrainCircuit />}
              />
              <Cards
                title="Embed analytics"
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
                icon={<BrainCircuit />}
              />
              <Cards
                title="Access control"
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
                icon={<BrainCircuit />}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
