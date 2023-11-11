import Rectangle1 from "@/img/Vector 1.png";
import Rectangle2 from "@/img/Vector 2.png";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className="flex justify-between mt-3">
        <div className="">
          <Image src={Rectangle1} alt="" className="top-96"></Image>
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="flex flex-col items-center justify-center tracking-tighter">
            {/* <Image src={img} alt="" width={0} height={0} /> */}
            <Typography
              variant="h1"
              className="text-6xl leading-12 tracking-tighter"
            >
              Cara Lebih Bijak Untuk
            </Typography>
            <Typography
              variant="h1"
              className="text-6xl leading-12 tracking-tighter"
            >
              Mengelola{" "}
              <span className="border-b-4 border-b-secondary text-primary text-6xl leading-12 tracking-tighter ">
                Uang
              </span>{" "}
              Anda
            </Typography>
            <Button
              size="lg"
              className="mt-10 w-[290px] h-[70px] text-xl bg-primary "
            >
              Let's Join
            </Button>
          </div>
        </div>
        <div>
          <Image src={Rectangle2} alt=""></Image>
        </div>
      </div>
    </>
  );
}
