import ClientLogos from "@/components/ClientLogos";
import HeroSection from "@/components/HeroSection";
import Cards from "@/components/PixelBlock/Cards";
import Title from "@/components/PixelBlock/Title";
import Section from "@/components/PixelBlock/Section";
import Input from "@/components/Input";
import Button from "@/components/PixelBlock/Button";
import Grid from "@/components/PixelBlock/Grid";
import CountCard from "@/components/PixelBlock/CountCard";
import {
  blogPosts,
  cardsData2,
  clientLogos,
  contactInfo,
  countCards,
  featureCards,
  featureSectionsData,
  testimonials,
} from "@/data/data";
import FeatureSection from "@/components/PixelBlock/FeatureSection";
import ListGroup from "@/components/PixelBlock/ListGroup";

export default function Home() {
  return (
    <main className="">
      <HeroSection />

      <ClientLogos logos={clientLogos} />

      <Section className="bg-primary-500/5 lg:py-24 py-12">
        <Grid gap={14}>
          <Title
            className="max-w-lg text-center mx-auto"
            title="Why our clients choose Ensome?"
            content="Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          />
          <Grid columns={3} gap={8}>
            {featureCards.map((card, index) => (
              <Cards key={index} blok={card} />
            ))}
          </Grid>
        </Grid>
      </Section>

      {featureSectionsData.map((section, index) => (
        <FeatureSection key={index} blok={{ ...section, index }} />
      ))}

      <Section className="bg-primary-500/5 lg:py-24 py-12">
        <div className="flex flex-col gap-14">
          <Title className="text-center" title="Glad to help your success" />

          <Grid columns={3} gap={8}>
            {cardsData2.map((card, index) => (
              <Cards key={index} blok={card} />
            ))}
          </Grid>

          <div className="flex items-center justify-center">
            <Button size="lg">Learn more</Button>
          </div>
        </div>
      </Section>

      <Section className="lg:py-12 py-6 ">
        <div className="flex flex-col gap-20">
          <Title
            className="text-left max-w-md"
            title="Trusted by the best in the business"
          />

          <Grid columns={2} className=" !gap-16 lg:!gap-8">
            {testimonials.map((card, index) => (
              <Cards key={index} blok={card} />
            ))}
          </Grid>
        </div>
      </Section>

      <Section className="lg:py-12 py-6 bg-primary-500">
        <Grid
          columns={4}
          gap={0}
          alignItems="center"
          alignContent="center"
          className="text-white lg:divide-x divide-primary-50/30 lg:divide-y-0 divide-y"
        >
          {countCards.map((card, index) => (
            <CountCard key={index} count={card.count} title={card.title} />
          ))}
        </Grid>
      </Section>

      <Section className="lg:py-24 py-6 bg-primary-500/5">
        <Grid columns={12} gap={32} alignItems="center" alignContent="center">
          <div className="flex flex-col gap-20 lg:col-span-6">
            <Title
              className="text-left max-w-2xl"
              title="Left questions? Contacts us now for a free consultation and free trial!"
              content="Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi."
            />

            <ListGroup items={contactInfo} />
          </div>

          <div className="max-w-[445px] w-full lg:col-span-5">
            <Cards>
              <Title
                className="text-left max-w-2xl "
                fontSize="text-3xl"
                title="Contact Us"
              />

              <div className="flex flex-col gap-5">
                <Input
                  label="Name"
                  name="name"
                  id="name"
                  type="text"
                  autoComplete="given-name"
                />

                <Input
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  autoComplete="given-email"
                />

                <Input
                  label="Theme"
                  name="theme"
                  id="theme"
                  type="text"
                  autoComplete="given-name"
                />

                <Input
                  label="Message"
                  name="Message"
                  id="Message"
                  type="text"
                  autoComplete="given-name"
                />
                <div className="mt-5">
                  <Button size="lg">Send</Button>
                </div>
              </div>
            </Cards>
          </div>
        </Grid>
      </Section>

      <Section className="lg:py-20 py-6 bg-primary-500">
        <Grid columns={2} gap={20} alignItems="center" alignContent="center">
          <Title
            title="Subscribe to our newsletter"
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium."
            className=" text-white"
            fontSize="text-4xl"
          />

          <div className="flex relative rounded-md overflow-hidden">
            <input
              type="email"
              className="block w-full text-sm border-0 py-3 placeholder:text-black outline-none font-semibold bg-Helper-blue-3 px-6 min-h-12"
              placeholder="Your email"
            />
            <div className="absolute right-0">
              <Button
                size="lg"
                variant="ghost"
                className="!bg-white !border-white"
              >
                Send
              </Button>
            </div>
          </div>
        </Grid>
      </Section>

      <Section className="lg:py-20 py-6">
        <Grid gap={14}>
          <Title className="text-center" title="Ensome blog" />
          <Grid columns={3} gap={8}>
            {blogPosts.map((post, index) => (
              <Cards
                key={index}
                blok={post}
                variant="left"
                shadow="md"
                radius="md"
              />
            ))}
            {/* <Cards
              variant="left"
              shadow="md"
              radius="md"
              image="https://placehold.co/600x400/png"
              imageAlt="Another Placeholder Image"
              readMoreLink="#"
            >
              <div className="  text-sm">22 June 2020</div>
              <Title
                fontSize="text-2xl"
                title="Staffing software: key capabilities and top products"
              />
              <p className="     ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>
            </Cards>
            <Cards
              variant="left"
              shadow="md"
              radius="md"
              image="https://placehold.co/600x400/png"
              imageAlt="Another Placeholder Image"
            >
              <div className="  text-sm">22 June 2020</div>
              <Title
                fontSize="text-2xl"
                title="Staffing software: key capabilities and top products"
              />
              <p className="     ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>
              <div className="flex">
                <Button variant="link" color="primary">
                  Read more
                </Button>
              </div>
            </Cards>
            <Cards
              variant="left"
              shadow="md"
              radius="md"
              image="https://placehold.co/600x400/png"
              imageAlt="Another Placeholder Image"
            >
              <div className="  text-sm">22 June 2020</div>
              <Title
                fontSize="text-2xl"
                title="Staffing software: key capabilities and top products"
              />
              <p className="     ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>
              <div className="flex">
                <Button variant="link" color="primary">
                  Read more
                </Button>
              </div>
            </Cards> */}
          </Grid>
        </Grid>
      </Section>
    </main>
  );
}
