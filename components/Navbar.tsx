import React from "react";
import Logo from "./Logo";
import MenuLink from "./MenuLink";
interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Logo />
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12 items-center">
        <MenuLink label="Home" href="#" />
        <MenuLink label="Solutions" href="#" />
        <MenuLink
          label="Product"
          href="/product"
          menuItems={[
            { label: "Analytics", href: "/analytics" },
            { label: "Engagement", href: "/engagement" },
            { label: "Security", href: "/security" },
            // Add more menu items as needed
          ]}
        />
        <MenuLink label="Blog" href="#" />
        <MenuLink label="Contacts" href="#" />
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
