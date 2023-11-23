import RectangleHouse from "@/img/RectangleHouse.png";
import Rectangle1 from "@/img/Vector 1.png";
import Rectangle2 from "@/img/Vector 2.png";
import Line from "@/img/garis1.png";
import Line2 from "@/img/garis2.png";
import img from "@/img/heroimage.png";
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
        <div className="flex justify-center items-center mt-5">
          <div className="flex flex-col items-center justify-center tracking-tighter">
            <Image src={img} alt="" width={0} height={0} priority />
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
      <div className="flex justify-center mt-5 z-40">
        <Image src={RectangleHouse} alt="" className="absolute"></Image>
        <Image src={imageHouse} alt="" className="absolute"></Image>
        <div className="">
          <Image src={Line} alt="" className="absolute"></Image>
          <Image src={Line2} alt=""></Image>
        </div>
      </div>
    </>
  );
}
