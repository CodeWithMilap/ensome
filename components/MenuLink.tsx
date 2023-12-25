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
    <div className="relative inline-block">
      {menuItems ? (
        <div className="relative inline-block">
          <button
            type="button"
            className="flex items-center gap-x-1 font-manrope text-Grey text-sm"
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
              className={`absolute -z-10 right-0 top-full min-w-60 mt-3 overflow-hidden rounded-sm bg-white shadow-Card3 ${
                isDropdownOpen
                  ? "open transition ease-out duration-200 transform translate-y-0 opacity-100 z-10"
                  : "transition ease-in duration-150 transform translate-y-1 opacity-0"
              }`}
            >
              <div className="p-4">
                {menuItems.map((menuItem, index) => (
                  <Link
                    key={index}
                    href={menuItem.href}
                    className="block font-manrope text-Grey text-sm py-2"
                  >
                    {menuItem.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link href={href} className="block font-manrope text-Grey text-sm">
          {label}
        </Link>
      )}
    </div>
  );
};

export default MenuLink;
