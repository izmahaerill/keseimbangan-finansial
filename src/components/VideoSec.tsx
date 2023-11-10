import { VIDEDUCATION } from "@/constatants";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export default function VideoSec() {
  return (
    <div>
      <div className="flex justify-center">
        {VIDEDUCATION.map(({ image, tittle, manag, keu, subFooter }, index) => (
          <div key={tittle}>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={image} alt="card-image" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
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
        ))}
      </div>
    </div>
  );
}
