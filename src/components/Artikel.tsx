import img1 from "@/img/Frame1.png";
import img2 from "@/img/Frame2.png";
import imgSec from "@/img/Group 8541.png";
import human1 from "@/img/human1.webp";
import human2 from "@/img/human2.webp";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function Artikel() {
  return (
    <div className="flex justify-center items-center max-w-fit">
      <div>
        <div className="flex flex-col justify-center items-center mb-2 mt-16">
          <Typography variant="h3" className="flex justify-center mb-10">
            Artikel Edukasi
          </Typography>
          <Typography
            variant="paragraph"
            className="text-gray-600 flex justify-center items-center mb-10 text-lg w-2/3 text-center"
          >
            Artikel merupakan tulisan yang dirancang untuk memberikan pemahaman
            dan wawasan kepada pembaca tentang berbagai aspek keuangan, seperti
            pengelolaan uang, investasi, perencanaan pensin dan manajemen hutang
          </Typography>
        </div>
        <div className="flex gap-8 px-16">
          <Image
            src={img1}
            alt=""
            width={570}
            height={400}
            priority
            className="rounded-lg object-cover"
          ></Image>
          <div>
            <Typography
              variant="paragraph"
              className="text-3xl mb-9 leading-extra-loose"
            >
              Mengelola Utang dengan Bijak: Strategi Pelunasan dan Konsolidasi
            </Typography>
            <Typography
              variant="paragraph"
              className="text-lg mb-5 leading-extra-loose"
            >
              Artikel ini memberikan panduan tentang cara mengelola utang
              pribadi, termasuk strategi pelunasan yang efektif dan opsi
              konsolidasi utang untuk mengurangi beban keuangan.
            </Typography>
            <div className="flex gap-2 mb-14 ">
              <Typography
                variant="paragraph"
                className="text-purple-900 bg-purple-100 px-8 py-1 text-md rounded-full"
              >
                Keuangan
              </Typography>
              <Typography
                variant="paragraph"
                className="text-yellow-900 bg-yellow-200 px-8 py-1 text-md rounded-full"
              >
                Manajemen
              </Typography>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <Image
                  src={human1}
                  width={50}
                  height={50}
                  alt=""
                  priority
                  className="rounded-full"
                />
                <div>
                  <Typography>Obi</Typography>
                  <Typography>20.12.2020</Typography>
                </div>
              </div>
              <div>
                <Typography>Read More</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="-my-36">
          <Image src={imgSec} alt="" height={0} width={0} />
        </div>
        <div className="flex gap-8 px-16">
          <div>
            <Typography
              variant="paragraph"
              className="text-3xl mb-9 leading-extra-loose"
            >
              Bagaimana Menyiapkan Dana Pendidikan Anak: Rencana Keuangan yang
              Tepat
            </Typography>
            <Typography
              variant="paragraph"
              className="text-lg mb-5 leading-extra-loose"
            >
              Artikel ini memberikan panduan langkah demi langkah tentang cara
              merencanakan keuangan untuk pendidikan anak, termasuk pembentukan
              rencana tabungan dan investasi yang efektif.
            </Typography>
            <div className="flex gap-2 mb-14 ">
              <Typography
                variant="paragraph"
                className="text-purple-900 bg-purple-100 px-8 py-1 text-md rounded-full"
              >
                Keuangan
              </Typography>
              <Typography
                variant="paragraph"
                className="text-yellow-900 bg-yellow-200 px-8 py-1 text-md rounded-full"
              >
                Manajemen
              </Typography>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <Image
                  src={human2}
                  width={50}
                  height={50}
                  alt=""
                  priority
                  className="rounded-full"
                />
                <div>
                  <Typography>Indra</Typography>
                  <Typography>20.12.2020</Typography>
                </div>
              </div>
              <div>
                <Typography>Read More</Typography>
              </div>
            </div>
          </div>
          <Image
            src={img2}
            alt=""
            width={570}
            height={400}
            priority
            className="rounded-lg object-cover"
          ></Image>
        </div>
        {/* <div className="flex flex-col">
          {ARTIKEL.map(({ title, subTittle, keu, manag, image }, index) => (
            <div
              key={title}
              className={`flex justify-center gap-5 mb-20 ${
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
                    className="text-purple-900 bg-purple-100 px-6 py-1 text-sm rounded-full"
                  >
                    {keu}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-yellow-900 bg-yellow-200 px-6 py-1 text-sm rounded-full"
                  >
                    {manag}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
