import img from "@/img/Frame 112.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [eduDropdownOpen, setEduDropdownOpen] = useState(false);
  const [calcDropdownOpen, setCalcDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = useSession();

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
    <>
      <nav className="p-4 shadow-md px-14 mb-20 font-sans text-anjirr fixed left-0 right-0 z-50 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src={img} alt="Logo" className="" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 ">
            <Link
              href="/managemen"
              className="hover:bg-purple-100 p-2 rounded-md transition duration-150 ease-out hover:ease-in"
            >
              Manajemen Keuangan
            </Link>
            <Link
              href="/remainder"
              className="hover:bg-purple-100 p-2 rounded-md transition duration-150 ease-out hover:ease-in"
            >
              Pengingat
            </Link>
            <div
              className="relative inline-block text-left"
              onMouseEnter={openEduDropdown}
              onMouseLeave={closeEduDropdown}
            >
              <button className="flex items-center hover:bg-purple-100 p-2 rounded-md focus:outline-none transition duration-150 ease-out hover:ease-in">
                Edukasi
                <ChevronDownIcon
                  className={`ml-1 h-4 w-4 ${
                    eduDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {eduDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
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
                      href="/edukasi/article"
                      className="block px-4 py-2 text-sm text-anjirr hover:bg-purple-100"
                      role="menuitem"
                    >
                      Artikel
                    </Link>
                    <Link
                      href="/edukasi"
                      className="block px-4 py-2 text-sm text-anjirr hover:bg-purple-100"
                      role="menuitem"
                    >
                      Video
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative inline-block text-left"
              onMouseEnter={openCalcDropdown}
              onMouseLeave={closeCalcDropdown}
            >
              <button className="flex items-center hover:bg-purple-100 p-2 rounded-md focus:outline-none transition duration-150 ease-out hover:ease-in">
                <span>Kalkulator</span>
                <ChevronDownIcon
                  className={`h-4 w-4 ml-2 ${
                    calcDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {calcDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
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
                      href="/kalkulator/danaDarurat"
                      className="block px-4 py-2 text-sm text-anjirr hover:bg-purple-100"
                      role="menuitem"
                    >
                      Dana Darurat
                    </Link>
                    <Link
                      href="/kalkulator"
                      className="block px-4 py-2 text-sm text-anjirr hover:bg-purple-100"
                      role="menuitem"
                    >
                      Cicilan Pinjaman
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* TODO: handle login with credentials */}
          {session ? (
            <Menu
              open={isMenuOpen}
              handler={setIsMenuOpen}
              placement="bottom-end"
            >
              <div className="flex items-center gap-2">
                <MenuHandler>
                  <Avatar
                    src={session.user?.image as string}
                    alt="Profile"
                    withBorder={true}
                    className="p-0.5 cursor-pointer"
                  />
                </MenuHandler>
                <Typography
                  color="blue-gray"
                  className="font-bold text-md drop-shadow-lg shadow-black text-anjirr"
                >
                  {session?.user?.name}
                </Typography>
              </div>
              <MenuList className="p-1">
                <Link href="/profile">
                  <MenuItem>Profile</MenuItem>
                </Link>
                <MenuItem
                  onClick={() => signOut()}
                  className="flex items-center gap-2 text-red-500"
                >
                  <Icon icon="tabler:logout" className="text-lg" />
                  <Typography variant="paragraph" className="font-medium">
                    Sign Out
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin">
                <button className="text-anjirr px-4 py-2 rounded bg-secondary hover:bg-yellow-700 transition duration-150 ease-out hover:ease-in">
                  Login
                </button>
              </Link>
              <Link href="/auth/signup">
                <button className="text-anjirr outline outline-1 rounded outline-secondary p-2 hover:bg-secondary transition duration-200 ease-out hover:ease-in">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
