// MobileMenu.tsx
import React from "react";
import MenuLink from "./MenuLink";
import Logo from "./Logo";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`${isOpen ? "" : "hidden"} `}
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 z-10 bg-primary-500"></div>
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-500 dark:bg-secondary-500 px-6 py-6 lg:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        {/* Mobile menu content */}
        <div className="flex items-center justify-between">
          <Logo className="text-white"/>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6 stroke-white "
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="border-t border-white  border-opacity-80">
            <div className="">
              <MenuLink label="Features" href="#" />
              <MenuLink label="Marketplace" href="#" />
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
              <MenuLink label="Company" href="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
