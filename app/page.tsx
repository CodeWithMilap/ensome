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
import Input from "@/components/Input";

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
              <Title fontSize="text-2xl" title="Machine learning" />
              <p className="font-opensans text-Grey ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>
            </Cards>
            <Cards icon={<BrainCircuit />}>
              <Title fontSize="text-2xl" title="Embed analytics" />
              <p className="font-opensans text-Grey ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>
            </Cards>
            <Cards icon={<BrainCircuit />}>
              <Title fontSize="text-2xl" title="Access control" />
              <p className="font-opensans text-Grey ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>
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
              />
              <p className="font-opensans text-Grey ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>
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
              />
              <p className="font-opensans text-Grey ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>
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
              />
              <p className="font-opensans text-Grey ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>
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

      <Section className="lg:py-12 py-6">
        <div className="flex flex-col gap-20">
          <Title
            className="text-left max-w-md"
            title="Trusted by the best in the business"
          />

          <div className="flex gap-8 lg:flex-row flex-col">
            <div className="shadow-Card3 px-9 py-11 rounded-md flex flex-col gap-10 bg-White w-full relative">
              <div className="flex -space-x-2 overflow-hidden  top-0 -mt-20">
                <img
                  className="inline-block h-20 w-20 rounded-full "
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <p className="font-opensans text-Grey ">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel
                illum.”
              </p>

              <div className="font-manrope">
                <div className="text-Black font-bold">Alex Bern</div>
                <span className="text-Grey">CEO by PixelPerfect</span>
              </div>
            </div>
            <div className="shadow-Card3 px-9 py-11 rounded-md flex flex-col gap-10 bg-White w-full relative">
              <div className="flex -space-x-2 overflow-hidden  top-0 -mt-20">
                <img
                  className="inline-block h-20 w-20 rounded-full "
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <p className="font-opensans text-Grey ">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel
                illum.”
              </p>

              <div className="font-manrope">
                <div className="text-Black font-bold">Alex Bern</div>
                <span className="text-Grey">CEO by PixelPerfect</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="lg:py-12 py-6 bg-Primary">
        <div className="flex justify-around text-White divide-x">
          <div className="flex justify-center w-full">
            <div className="flex flex-col gap-5 text-center">
              <h2 className="lg:text-5xl text-3xl font-extrabold">1830+</h2>
              <h4 className="font-bold">Project executed</h4>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex flex-col gap-5 text-center">
              <h2 className="lg:text-5xl text-3xl font-extrabold">1830+</h2>
              <h4 className="font-bold">Project executed</h4>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex flex-col gap-5 text-center">
              <h2 className="lg:text-5xl text-3xl font-extrabold">1830+</h2>
              <h4 className="font-bold">Project executed</h4>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex flex-col gap-5 text-center">
              <h2 className="lg:text-5xl text-3xl font-extrabold">1830+</h2>
              <h4 className="font-bold">Project executed</h4>
            </div>
          </div>
        </div>
      </Section>

      <Section className="lg:py-24 py-6 bg-Background">
        <div className="flex gap-32">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-6">
              <Title
                className="text-left max-w-2xl"
                title="Left questions? Contacts us now for a free consultation and free trial!"
              />
              <p className="font-opensans text-Grey ">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <dl className="flex flex-col gap-1">
                <dt className="text-Grey">Email address</dt>
                <dd className="font-bold">ensome@info.co.us</dd>
              </dl>

              <dl className="flex flex-col gap-1">
                <dt className="text-Grey">Phone number</dt>
                <dd className="font-bold">+1601-201-5580</dd>
              </dl>

              <dl className="flex flex-col gap-1">
                <dt className="text-Grey">Address</dt>
                <dd className="font-bold">
                  1642 Washington Avenue, Jackson, MS, Mississippi, 39201
                </dd>
              </dl>
            </div>
          </div>

          <div className="max-w-[445px] w-full flex">
            <div className="shadow-Card3 px-9 py-11 rounded-md flex flex-col gap-10 bg-White w-full relative">
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
                  <Button label="Send" size="large" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>


      <Section className="lg:py-20 py-6 bg-Primary">
        <div className="grid grid-cols-2 items-center gap-20">
          <div className="flex flex-col gap-6 max-w-lg">
            <Title
              title="Subscribe to our newsletter"
              className=" text-White"
              fontSize="text-4xl"
            />
            <p className="text-lg text-White">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          </div>

          <div className="flex relative rounded-md overflow-hidden">
            <input
              type='email'
              className="block w-full text-sm border-0 py-3 placeholder:text-Black outline-none font-bold bg-Helper-blue-3 px-6 min-h-[50px]"
              placeholder="Your email"
            />
            <div className="absolute right-0">
              <Button label="Send" size="large" buttonColor="white" />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
