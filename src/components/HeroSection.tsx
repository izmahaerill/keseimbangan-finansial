import RectangleHouse from "@/img/RectangleHouse.png";
import Rectangle1 from "@/img/Vector 1.png";
import Rectangle2 from "@/img/Vector 2.png";
import bulet1 from "@/img/bulet1.png";
import bulet3 from "@/img/bulet3.png";
import buletKuning from "@/img/buletKuning.png";
import Line from "@/img/garis1.png";
import Line2 from "@/img/garis2.png";
import heroImage from "@/img/heroimage.png";
import imageHouse from "@/img/house.png";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <div className="flex justify-between mt-3">
        <div>
          <Image src={Rectangle1} alt="" priority className="top-96"></Image>
        </div>
        <div className="flex justify-center items-center mt-5 ">
          <div className="flex flex-col items-center justify-center  ">
            <Image src={heroImage} alt="" width={0} height={0} priority />
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="mt-10 w-[290px] h-[65px] rounded-xl text-xl p-0 bg-primary capitalize"
              >
                Let's Join
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Image src={Rectangle2} priority alt="" className="mt-40 "></Image>
        </div>
      </div>
      <div className="flex justify-center mt-20 mb-28">
        <Image src={RectangleHouse} alt="" className="absolute"></Image>
        <Image src={imageHouse} alt="" className="absolute -mt-2 ml-5"></Image>
        <div className="">
          <Image src={Line} alt="" className="absolute -z-40 -ml-36"></Image>
          <Image src={Line2} alt="" className="ml-36 z-30"></Image>
        </div>
      </div>
      <div>
        <Image
          src={bulet1}
          alt=""
          className="absolute ml-[65rem] -mt-[45rem]"
        ></Image>
        <Image
          src={bulet3}
          alt=""
          className="absolute -mt-[27rem] ml-14 rotate-[5deg] -z-10"
        ></Image>
        <Image
          src={buletKuning}
          alt=""
          className="absolute -mt-[46rem] ml-20 "
        ></Image>
        <Image
          src={bulet1}
          alt=""
          className="absolute -mt-[20.5rem] ml-[70rem] w-16 h-16-z-10"
        ></Image>
      </div>
    </>
  );
}
