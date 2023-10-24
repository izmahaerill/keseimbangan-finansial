import { ARTIKEL } from "@/constatants";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function Artikel() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="flex flex-col justify-center">
          <Typography
            variant="paragraph"
            className="text-lg flex justify-center"
          >
            Artikel Edukasi
          </Typography>
          <Typography
            variant="paragraph"
            className="flex justify-center items-center mb-10 text-sm"
          >
            Artikel merupakan tulisan yang dirancang untuk memberikan pemahaman
            dan wawasan kepada pembaca tentang berbagai aspek keuangan, seperti
          </Typography>
        </div>
        <div className=" flex flex-col justify-center">
          {ARTIKEL.map(({ title, subTittle, keu, manag, image }, index) => (
            <div key={title} className="flex justify-center gap-5">
              <Image src={image} alt="" width={250} height={250}></Image>
              <div className="flex flex-col gap-1">
                <Typography variant="paragraph" className="text-lg">
                  {title}
                </Typography>
                <Typography variant="paragraph" className="text-xs">
                  {subTittle}
                </Typography>
                <div className="flex gap-2 text-xs">
                  <Typography variant="paragraph">{keu}</Typography>
                  <Typography variant="paragraph">{manag}</Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
