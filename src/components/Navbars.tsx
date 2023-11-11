// components/Navbar.tsx
import img from "@/img/Frame 112.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [eduDropdownOpen, setEduDropdownOpen] = useState(false);
  const [calcDropdownOpen, setCalcDropdownOpen] = useState(false);

  let eduTimeout: NodeJS.Timeout | null = null;
  let calcTimeout: NodeJS.Timeout | null = null;

  const openEduDropdown = () => {
    setEduDropdownOpen(true);
    clearTimeout(eduTimeout as NodeJS.Timeout);
  };

  const closeEduDropdown = () => {
    eduTimeout = setTimeout(() => {
      setEduDropdownOpen(false);
    }, 200);
  };

  const openCalcDropdown = () => {
    setCalcDropdownOpen(true);
    clearTimeout(calcTimeout as NodeJS.Timeout);
  };

  const closeCalcDropdown = () => {
    calcTimeout = setTimeout(() => {
      setCalcDropdownOpen(false);
    }, 200);
  };

  return (
    <nav className="p-4 shadow-sm px-14">
      <div className="flex items-center justify-between">
        {/* Bagian 1: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={img} alt="Logo" className="" />
          </Link>
        </div>

        {/* Bagian 2: Menu */}
        <div className="hidden md:flex items-center space-x-4 ">
          <Link
            href="#"
            className="hover:bg-secondary p-2 rounded-md transition duration-150 ease-out hover:ease-in"
          >
            Manajemen Keuangan
          </Link>
          <Link
            href="#"
            className="hover:bg-secondary p-2 rounded-md transition duration-150 ease-out hover:ease-in"
          >
            Pengingat
          </Link>

          {/* Edukasi Dropdown */}
          <div
            className="relative inline-block text-left"
            onMouseEnter={openEduDropdown}
            onMouseLeave={closeEduDropdown}
          >
            <button className="flex items-center hover:bg-secondary p-2 rounded-md focus:outline-none transition duration-150 ease-out hover:ease-in">
              Edukasi
              <ChevronDownIcon
                className={`ml-1 h-4 w-4 ${
                  eduDropdownOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {eduDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                onMouseEnter={openEduDropdown}
                onMouseLeave={closeEduDropdown}
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="edukasi-menu"
                >
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-anjirr hover:bg-secondary"
                    role="menuitem"
                  >
                    DP 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-anjirr hover:bg-secondary"
                    role="menuitem"
                  >
                    DP 2
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-anjirr hover:bg-secondary"
                    role="menuitem"
                  >
                    DP 3
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Kalkulator Dropdown */}
          <div
            className="relative inline-block text-left"
            onMouseEnter={openCalcDropdown}
            onMouseLeave={closeCalcDropdown}
          >
            <button className="flex items-center hover:bg-secondary p-2 rounded-md focus:outline-none transition duration-150 ease-out hover:ease-in">
              <span>Kalkulator</span>
              <ChevronDownIcon
                className={`h-4 w-4 ml-2 ${
                  calcDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {calcDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                onMouseEnter={openCalcDropdown}
                onMouseLeave={closeCalcDropdown}
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="kalkulator-menu"
                >
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-anjirr hover:bg-secondary"
                    role="menuitem"
                  >
                    Cal 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-anjirr hover:bg-secondary"
                    role="menuitem"
                  >
                    Cal 2
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-anjirr hover:bg-secondary"
                    role="menuitem"
                  >
                    Cal 3
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bagian 3: Button Login dan Sign Up */}
        <div className="flex items-center space-x-4">
          <button className="text-anjirr px-4 py-2 rounded bg-secondary hover:bg-yellow-700 transition duration-150 ease-out hover:ease-in">
            Login
          </button>
          <button className="text-anjirr outline outline-1 rounded-md outline-secondary p-2 hover:bg-secondary transition duration-150 ease-out hover:ease-in">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
