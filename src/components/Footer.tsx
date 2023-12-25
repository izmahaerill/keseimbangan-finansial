import { LOGO } from "@/constatants";
import img from "@/img/Frame 112.png";
import { Icon } from "@iconify/react";
import { List, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="mt-[65rem] sm:mx-7">
        <footer className="relative mt-[100px]">
          <div
            className="flex justify-around items-center sm:flex-col sm:items-start sm:gap-5 0 lg:flex-row lg:-mx-14 border-b-2 lg:pb-10 sm:pb-5
          "
          >
            <div>
              <Link href="/">
                <Image src={img} width={163} height={43} alt="" />
              </Link>
            </div>
            <div>
              <List className="flex flex-row justify-between items-center gap-10 sm:flex-col sm:items-start sm:-ml-2 sm:gap-2 lg:flex-row lg:gap-10">
                <Link href="/managemen">
                  <Typography className="hover:text-primary text-anjirr">
                    Managemen Keuangan
                  </Typography>
                </Link>
                <Link href="/pengingat">
                  <Typography className="hover:text-primary text-anjirr">
                    Pengingat
                  </Typography>
                </Link>
                <Link href="/edukasi">
                  <Typography className="hover:text-primary text-anjirr">
                    Edukasi
                  </Typography>
                </Link>
                <Link href="/kalkulator">
                  <Typography className="hover:text-primary text-anjirr">
                    Kalkulator
                  </Typography>
                </Link>
              </List>
            </div>
            <div className="flex gap-6 text-anjirr">
              {LOGO.map(({ icon, url }) => (
                <div key={icon}>
                  <Link href={url} className="text-4xl">
                    <Icon icon={icon} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between lg:my-10 sm:my-5 text-anjirr sm:mx-0 lg:mx-8">
            <Typography variant="paragraph">
              &copy; {currentYear} My Finance. All Rights Reserved.
            </Typography>
            <div className="flex gap-10 sm:gap-5">
              <Typography>Privacy Policy</Typography>
              <Typography>Terms & Conditions</Typography>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
