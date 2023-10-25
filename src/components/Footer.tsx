import img from "@/img/Frame 112.png";
import { List, Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="flex justify-around items-center mb-16">
          <div>
            <Image src={img} width={163} height={43} alt="">
              {}
            </Image>
          </div>
          <div>
            <List className="flex flex-row justify-between items-center gap-10">
              <Typography>Menegemen Keuangan</Typography>
              <Typography>Remainder</Typography>
              <Typography>Edukasi</Typography>
              <Typography>Kalkulator</Typography>
            </List>
          </div>
          <div>Lorem ipsum dolor sit amet.</div>
          {/* <div>
            {LOGO.map(({ icon, url }, index) => (
              <Link href={url} key={icon}>
                <Button>
                  <Icon icon={icon} />
                </Button>
              </Link>
            ))}
          </div> */}
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
