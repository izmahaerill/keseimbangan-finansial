import { QUOTES } from "@/constatants";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const colors = ["bg-[#FFFEC1]", "bg-[#F1CDFF]", "bg-[#99F6EC]", "bg-[#BFD7FE]"];
const margin = ["mt-[5.2rem]", "mt-[4rem]", "mt-[7rem]", "mt-16"];

export default function Quotes() {
  return (
    <>
      <Typography variant="h3" className="flex justify-center mb-10 mt-28">
        Quotes Of The Day
      </Typography>
      <div className="flex gap-11 justify-center h-[376px] ">
        {QUOTES.map(({ tittle, sub }, index) => (
          <div
            key={tittle}
            className="flex justify-center text-center mb-10 text-anjirr"
          >
            <Card
              className={`mt-5 w-64 text-anjirr ${
                colors[index % colors.length]
              }`}
            >
              <CardBody>
                <Typography>{sub}</Typography>
              </CardBody>
              <CardFooter className={`pt-0 ${margin[index % margin.length]}`}>
                <Typography>{tittle}</Typography>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
