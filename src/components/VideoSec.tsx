import { VIDEDUCATION } from "@/constatants";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";

export default function VideoSec({ name }: { name: any[] }) {
  const LinkVid = [""];
  const router = useRouter();

  return (
    <div className="grid grid-cols-3 w-full gap-5 ">
      {VIDEDUCATION.map((item) => (
        <>
          {/* TODO: handle name[...] */}
          {item.data.map(
            ({
              id,
              tittle,
              manag,
              keu,
              src,
              subFooter,
            }: {
              id: any;
              tittle: any;
              manag: any;
              keu: any;
              src: any;
              subFooter: any;
            }) => (
              <div key={id}>
                <Card
                  onClick={() => router.replace("/edukasi/" + id)}
                  className="mt-6 cursor-pointer shadow-lg rounded-lg"
                >
                  <CardHeader
                    color="blue-gray"
                    className="relative h-40 rounded-lg"
                  >
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
                    <Typography variant="h5" color="blue-gray">
                      {tittle}
                    </Typography>
                  </CardBody>
                  <div className="flex gap-2 mb-5 ml-7">
                    <Typography
                      variant="paragraph"
                      className="text-purple-900 bg-purple-100 px-2 py-1 text-sm  rounded-full"
                    >
                      {manag}
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-yellow-900 bg-yellow-200 px-2 py-1 text-sm  rounded-full"
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
        </>
      ))}
    </div>
  );
}
