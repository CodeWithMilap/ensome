import ClientLogos from "@/components/ClientLogos";
import HeroSection from "@/components/HeroSection";

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
          <div>
            <div className="max-w-xl mx-auto text-center flex flex-col gap-6">
              <h2 className="text-5xl font-extrabold leading-tight ">
                Find true power in your data with Ensome
              </h2>
              <p className="text-xl font-opensans text-Grey leading-snug">
                Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
