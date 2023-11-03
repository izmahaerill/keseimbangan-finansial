import { Typography } from "@material-tailwind/react";
type TittleProps = {
  name: string;
  subTittle: string;
};

export default function Tittle(props: TittleProps) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-2">
        <Typography
          variant="h5"
          className="flex justify-center mb-5 text-gray-900"
        >
          {props.name}
        </Typography>
        <Typography
          variant="paragraph"
          className="text-gray-600 flex justify-center items-center mb-10 text-sm  text-center"
        >
          {props.subTittle}
        </Typography>
      </div>
    </div>
  );
}
