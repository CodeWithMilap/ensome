import ClientLogos from "@/components/ClientLogos";
import HeroSection from "@/components/HeroSection";
import Cards from "@/components/Cards";
import { BrainCircuit } from "@/constants/Icons";
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

      <section className="bg-Background py-24">
        <div className="max-w-screen-xl mx-auto lg:px-8 px-6">
          <div className="flex flex-col gap-14">
            <div className="max-w-lg mx-auto text-center flex flex-col gap-6">
              <h2 className="text-5xl font-extrabold leading-tight">
                Why our clients chosse Ensome?
              </h2>
              <p className="text-xl font-opensans text-Grey leading-snug">
                Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo.
              </p>
            </div>

            <div className="flex gap-8">
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
