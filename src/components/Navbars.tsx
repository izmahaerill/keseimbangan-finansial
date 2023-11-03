import img from "@/img/Frame 112.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Button, List, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbars() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="mb-10 shadow-sm">
      <nav>
        <div className="flex justify-between px-[3.7rem] items-center py-[1rem]">
          <Link href={"/"}>
            <Image src={img} width={163} height={43} alt="/" />
          </Link>
          <div>
            <List className="flex flex-row justify-between items-center gap-2">
              <Link
                href={""}
                className="hover:bg-gray-100 relative block px-2 py-1 rounded-lg transition ease-in-out duration-700"
              >
                <Typography className="">Menegemen Keuangan</Typography>
              </Link>
              <Link
                href={""}
                className="hover:bg-gray-100 relative block px-2 py-1 rounded-lg transition ease-in-out duration-700"
              >
                <Typography>Pengingat</Typography>
              </Link>
              <Link
                href={""}
                className="hover:bg-gray-100 relative block px-2 py-1 rounded-lg transition ease-in-out duration-700"
              >
                <Typography className="flex items-center gap-2">
                  Edukasi
                  <ChevronDownIcon
                    className="w-4 h-4"
                    strokeWidth={0}
                    // className={`hidden h-3 w-3 transition-transform lg:block ${
                    //   isMenuOpen ? "rotate-180" : ""
                    // }`}
                  />
                </Typography>
              </Link>
              <Link
                href={""}
                className="hover:bg-gray-200 relative block px-2 py-1 rounded-lg transition ease-in-out duration-700"
              >
                <Typography className="flex items-center gap-2">
                  Kalkulator
                  <ChevronDownIcon
                    className="w-4 h-4"
                    strokeWidth={0}
                    // className={`hidden h-3 w-3 transition-transform lg:block ${
                    //   isMenuOpen ? "rotate-180" : ""
                    // }`}
                  />
                </Typography>
              </Link>
            </List>
          </div>
          <div className="flex gap-3 ">
            <Link href={""}>
              <Button
                className="bg-secondary text-black"
                size="sm"
                variant="filled"
              >
                Sign In
              </Button>
            </Link>
            <Link href={""} className="">
              <Button
                variant="outlined"
                size="sm"
                className="text-black"
                color="yellow"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
