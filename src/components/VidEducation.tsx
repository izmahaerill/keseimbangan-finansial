import { VIDEDUCATION } from "@/constatants";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export default function VidEducation() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-2 mt-16">
        <Typography variant="h3" className="flex justify-center mb-10">
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
      <div className="flex justify-center gap-5">
        {VIDEDUCATION.map(
          ({ id, image, tittle, manag, keu, subFooter }, index) => (
            <div key={id}>
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
          )
        )}
      </div>
    </>
  );
}
