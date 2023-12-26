"use client";
import React, { useState } from "react";
import Link from "next/link";

interface MenuItemProps {
  label: string;
  href: string;
  menuItems?: Array<{ label: string; href: string }>;
}

const MenuLink: React.FC<MenuItemProps> = ({ label, href, menuItems }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {menuItems ? (
        <div className="relative border-b lg:border-transparent border-Helper-blue-2 border-opacity-50">
          <button
            type="button"
            className="flex py-4 lg:py-0 w-full justify-between items-center gap-x-1 font-manrope hover:text-Black font-semibold text-Grey text-base dark:text-White dark:hover:text-White "
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
            aria-label={
              isDropdownOpen ? `Close ${label} menu` : `Open ${label} menu`
            }
          >
            <span>{label}</span>
            <svg
              className={`h-5 w-5 flex-none text-gray-400 transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {menuItems && (
            <div
              className={`lg:absolute -z-10 right-0 top-full lg:min-w-60 lg:mt-6 overflow-hidden rounded-sm bg-white lg:shadow-Card3 dark:bg-Secondary ${
                isDropdownOpen
                  ? "open transition ease-out duration-200 transform translate-y-0 opacity-100 z-10"
                  : "transition ease-in duration-150 transform translate-y-1 opacity-0 hidden"
              }`}
            >
              <div className="px-4 pb-4">
                {menuItems.map((menuItem, index) => (
                  <Link
                    key={index}
                    href={menuItem.href}
                    className="block font-manrope py-2 hover:text-Black font-semibold text-Grey text-sm lg:text-base dark:text-White dark:hover:text-White border-b border-transparent  dark:hover:border-Helper-blue-2 border-opacity-50"
                  >
                    {menuItem.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          href={href}
          className="block font-manrope py-4 lg:py-0 hover:text-Black font-semibold text-Grey text-base dark:text-White dark:hover:text-White dark:hover:border-Helper-blue-2 border-b lg:border-transparent border-Helper-blue-2 border-opacity-50"
        >
          {label}
        </Link>
      )}
    </>
  );
};

export default MenuLink;
