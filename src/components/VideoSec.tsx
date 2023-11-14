import { VIDEDUCATION } from "@/constatants";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export default function VideoSec() {
  const LinkVid = [""];

  return (
    <div>
      <div className="flex justify-center gap-6">
        {VIDEDUCATION.map(({ image, tittle, manag, keu, subFooter }, index) => (
          <div key={tittle}>
            <Card className="mt-6 w-72 hover:scale-105 duration-700">
              <CardHeader color="blue-gray" className="relative  ">
                <img
                  id="img"
                  src={image}
                  alt="card-image"
                  className="w-fitt w-auto h-auto"
                  height="auto"
                  width="auto"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  {tittle}
                </Typography>
              </CardBody>
              <div className="flex gap-2 mb-5 ml-7">
                <Typography
                  variant="paragraph"
                  className="text-purple-900 bg-purple-100 px-6 py-1 text-sm rounded-full"
                >
                  {manag}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-yellow-900 bg-yellow-200 px-6 py-1 text-sm rounded-full"
                >
                  {keu}
                </Typography>
              </div>
              <CardFooter className="pt-0">
                <Typography>{subFooter}</Typography>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
