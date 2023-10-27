import { QUOTES } from "@/constatants";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function Quotes() {
  return (
    <>
      <Typography variant="h3" className="flex justify-center mb-5">
        Quotes Of The Day
      </Typography>
      <div className="flex gap-5 justify-center">
        {QUOTES.map(({ tittle, sub }) => (
          <div key={tittle} className="flex justify-center text-center mb-10">
            <Card className="mt-5 w-64 bg-red-100">
              <CardBody>
                <Typography>{sub}</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography>{tittle}</Typography>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
