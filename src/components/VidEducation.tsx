import { VIDEOSECTION } from "@/constatants";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";

export default function VidEducation() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <Typography
          variant="h3"
          className="flex justify-center mb-10 text-anjirr"
        >
          Video Edukasi
        </Typography>
        <Typography
          variant="paragraph"
          className="text-gray-600 flex justify-center items-center mb-10 text-lg w-2/3 text-center"
        >
          Bebagai macam video edukasi untuk kepentingan mengatur keuangan untuk
          mencapai keseimbangan finansial yang lebih baik
        </Typography>
      </div>
      <div className="flex justify-center gap-2">
        <div className="flex justify-center gap-5">
          {VIDEOSECTION.map(
            ({ id, src, tittle, manag, keu, subFooter }, index) => (
              <div key={id}>
                <Card
                  onClick={() => router.replace("/edukasi/" + id)}
                  className="mt-6 w-96 cursor-pointer"
                >
                  <CardHeader color="blue-gray" className="relative h-56">
                    {/* <img src={image} alt="card-image" /> */}
                    <iframe
                      className="w-full  h-full"
                      width="560"
                      height="315"
                      src={src}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" className="mb-2 text-anjirr">
                      {tittle}
                    </Typography>
                  </CardBody>
                  <div className="flex gap-2 mb-5 ml-7">
                    <Typography
                      variant="paragraph"
                      className="text-purple-900 bg-purple-100 px-6 py-1 text-lg rounded-full"
                    >
                      {manag}
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-yellow-900 bg-yellow-200 px-6 py-1 text-lg rounded-full"
                    >
                      {keu}
                    </Typography>
                  </div>
                  <CardFooter className="pt-0">
                    <Typography>{subFooter}</Typography>
                  </CardFooter>
                </Card>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
