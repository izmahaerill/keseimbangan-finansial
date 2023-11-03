import { LOGO } from "@/constatants";
import img from "@/img/Frame 112.png";
import { Icon } from "@iconify/react";
import { List, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative mt-[100px]">
        <div className="flex justify-around items-center">
          <div>
            <Image src={img} width={163} height={43} alt="" />
          </div>
          <div>
            <List className="flex flex-row justify-between items-center gap-10">
              <Typography>Menegemen Keuangan</Typography>
              <Typography>Remainder</Typography>
              <Typography>Edukasi</Typography>
              <Typography>Kalkulator</Typography>
            </List>
          </div>
          <div className="flex gap-6">
            {LOGO.map(({ icon, url }) => (
              <div key={icon}>
                <Link href={url} className="text-4xl">
                  <Icon icon={icon} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mx-10 mb-10">
          <Typography variant="paragraph">
            &copy; {currentYear} My Finance. All Rights Reserved.
          </Typography>
          <div className="flex gap-10">
            <Typography>Privacy Policy</Typography>
            <Typography>Terms & Conditions</Typography>
          </div>
        </div>
      </footer>
    </>
  );
}
