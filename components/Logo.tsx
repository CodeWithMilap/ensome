import Link from "next/link";
import React from "react";

// Logo component now accepts a className prop
const Logo = ({ className = "" }) => {
  return (
    <Link href="#" className={`-m-1.5 p-1.5 ${className}`}>
      <span className="sr-only">Logo</span>
      <div className="text-2xl font-semibold">Logo</div>
    </Link>
  );
};

export default Logo;
