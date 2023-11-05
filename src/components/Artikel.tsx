import { ARTIKEL } from "@/constatants";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function Artikel() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="flex flex-col justify-center items-center mb-2">
          <Typography variant="h3" className="flex justify-center mb-5">
            Artikel Edukasi
          </Typography>
          <Typography
            variant="paragraph"
            className="text-gray-500 flex justify-center items-center mb-10 text-lg w-2/3 text-center"
          >
            Artikel merupakan tulisan yang dirancang untuk memberikan pemahaman
            dan wawasan kepada pembaca tentang berbagai aspek keuangan, seperti
          </Typography>
        </div>
        <div className="flex flex-col">
          {ARTIKEL.map(({ title, subTittle, keu, manag, image }, index) => (
            <div
              key={title}
              className={`flex justify-center gap-1 mb-20 ${
                index % 2 === 1 && "flex-row-reverse"
              }`}
            >
              <Image
                src={image}
                alt=""
                width={500}
                height={100}
                priority
                className="rounded-lg object-cover"
              ></Image>
              <div className="flex flex-col gap-7 max-w-2xl">
                <Typography variant="paragraph" className="text-4xl">
                  {title}
                </Typography>
                <Typography variant="paragraph" className="text-lg">
                  {subTittle}
                </Typography>
                <div className="flex gap-2">
                  <Typography
                    variant="paragraph"
                    className="text-purple-900 bg-purple-100 px-6 py-1 text-lg rounded-full"
                  >
                    {keu}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-yellow-900 bg-yellow-200 px-6 py-1 text-lg rounded-full"
                  >
                    {manag}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
