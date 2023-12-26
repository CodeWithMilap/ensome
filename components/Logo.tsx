import Link from "next/link";
import React from "react";
import LogoImg from "../public/logo_blue.svg";
import Image from "next/image";
const Logo = () => {
  return (
    <Link href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <Image className="lg:h-12 h-8 w-auto" src={LogoImg} alt="" />
    </Link>
  );
};

export default Logo;
