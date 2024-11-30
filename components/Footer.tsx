import React from "react";
import Section from "./PixelBlock/Section";
import Link from "next/link";
import LogoImg from "../public/logo_blue.svg";
import Image from "next/image";
import MenuAccordion from "./PixelBlock/MenuAccordion";

const navItems = [
  {
    title: "Quick link",
    navLinks: [
      {
        linkLabel: "Home",
        link: { cached_url: "#", linktype: "internal" },
      },
      {
        linkLabel: "About Us",
        link: { cached_url: "#", linktype: "internal" },
      },
      {
        linkLabel: "Services",
        link: { cached_url: "#", linktype: "internal" },
      },
      {
        linkLabel: "Solutions",
        link: { cached_url: "#", linktype: "internal" },
      },
    ],
  },
  {
    title: "Information",
    navLinks: [
      {
        linkLabel: "Contacts",
        link: { cached_url: "#", linktype: "internal" },
      },
      {
        linkLabel: "Our team",
        link: { cached_url: "#", linktype: "internal" },
      },
      {
        linkLabel: "Blog",
        link: { cached_url: "#", linktype: "internal" },
      },
      {
        linkLabel: "FAQ",
        link: { cached_url: "#", linktype: "internal" },
      },
    ],
  },
  {
    title: "Service",
    navLinks: [
      {
        linkLabel: "Pages",
        link: { cached_url: "#", linktype: "internal" },
      },
      {
        linkLabel: "Elements",
        link: { cached_url: "#", linktype: "internal" },
      },
      {
        linkLabel: "Site map",
        link: { cached_url: "#", linktype: "internal" },
      },
      {
        linkLabel: "Pricing",
        link: { cached_url: "#", linktype: "internal" },
      },
      {
        linkLabel: "FAQ",
        link: { cached_url: "#", linktype: "internal" },
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary-500/5">
      <Section className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 py-10">
          <div className="lg:col-span-5 py-5">
            <Image className="lg:h-12 h-8 w-auto" src={LogoImg} alt="" />
          </div>
          <nav aria-label="Footer menu" className="lg:col-span-7">
            <MenuAccordion navItems={navItems} />
          </nav>
        </div>
        <div className="w-full md:py-10 py-6 border-t border-primary-50/30 grid grid-cols-1 lg:grid-cols-2 gap-3 justify-between">
          <div className="flex gap-6">
            <Link href="#">Privacy policy</Link>
            <Link href="#">Terms of us</Link>
          </div>
          <div className="lg:text-right">
            © 2022 Ensome. All Rights Reserved.
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
