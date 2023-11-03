import Gambar from "@/img/Rectangle18206.png";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex justify-center object-cover">
      <Image priority alt="" src={Gambar} width={1200} height={500}>
        {}
      </Image>
    </div>
  );
}
