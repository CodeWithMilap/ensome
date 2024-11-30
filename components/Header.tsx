"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <Navbar isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </header>
  );
};

export default Header;
