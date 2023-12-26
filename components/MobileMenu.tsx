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
      <div className="fixed inset-0 z-10"></div>
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-Secondary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        {/* Mobile menu content */}
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6 dark:stroke-White"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
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
          <div className="border-t border-Helper-blue-2">
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
