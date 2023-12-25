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
      <div className="flex justify-between mt-32 ">
        <div>
          <Image
            src={Rectangle1}
            alt=""
            priority
            className="top-96 lg:w-auto sm:hidden"
          ></Image>
        </div>
        <div className="flex justify-center items-center mt-5 ">
          <div className="flex flex-col items-center justify-center  ">
            <Image
              src={heroImage}
              alt=""
              width={0}
              height={0}
              priority
              className="sm:w-[205rem] lg:w-auto"
            />
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="lg:mt-10 sm:mt-5 lg:w-[290px] lg:h-[65px] sm:w-[100px] sm:h-[30px] lg:rounded-xl sm:rounded-sm lg:text-2xl sm:text-xs p-0 bg-primary capitalize"
              >
                Let's Join
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={Rectangle2}
            priority
            alt=""
            className="mt-40 lg:w-auto sm:hidden"
          ></Image>
        </div>
      </div>
      <div className="flex justify-center lg:mt-20 lg:mb-28 sm:mt-10 sm:mb-10">
        <Image
          src={RectangleHouse}
          alt=""
          className="absolute lg:max-w-max sm:w-1/2"
        ></Image>
        <Image
          src={imageHouse}
          alt="house image"
          className="absolute lg:-mt-[12px] sm:-mt-[10px] lg:ml-5 sm:ml-2 lg:w-[40.7rem] sm:w-[21.7rem]"
        ></Image>
        <div className="sm:mt-8 lg:mt-auto">
          <Image
            src={Line}
            alt="line"
            className="absolute -z-40 lg:mt-auto lg:-ml-36 sm:-ml-2 sm:w-[35rem] lg:w-auto"
          ></Image>
          <Image
            src={Line2}
            alt="line"
            className="lg:ml-36 sm:ml-16 z-30 sm:w-[35rem] lg:w-auto"
          ></Image>
        </div>
      </div>
      <div>
        <Image
          src={bulet1}
          alt=""
          className="absolute lg:ml-[65rem] lg:-mt-[45rem] sm:ml-[33rem] sm:-mt-[20rem] sm:w-10 lg:w-auto"
        ></Image>
        <Image
          src={bulet3}
          alt=""
          className="absolute lg:-mt-[27rem] lg:ml-14 sm:-mt-[9.5rem] sm:ml-11 lg:rotate-[8deg] sm:rotate-[-6deg] -z-10 lg:w-auto sm:w-32"
        ></Image>
        <Image
          src={buletKuning}
          alt=""
          className="absolute lg:-mt-[46rem] lg:ml-20 sm:-mt-[21rem] sm:ml-9 sm:w-16 lg:w-auto"
        ></Image>
        <Image
          src={bulet1}
          alt=""
          className="absolute lg:-mt-[20.5rem] lg:ml-[70rem] sm:-mt-[7.3rem] sm:ml-[34rem] lg:w-16 lg:h-16 sm:w-7 sm:h-7 -z-10"
        ></Image>
      </div>
    </>
  );
}
