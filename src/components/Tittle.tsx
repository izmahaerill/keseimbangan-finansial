import { Typography } from "@material-tailwind/react";

type TittleProps = {
  name: string;
  subTittle: string;
  colors?: string;
};

export default function Tittle(props: TittleProps) {
  const splitName = props.name.split(" ");
  const coloredWord = (
    <span style={{ color: props.colors || "purple", marginLeft: "5px" }}>
      {splitName[1]}
    </span>
  );

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-2">
        <Typography
          variant="h3"
          className="flex justify-center mb-5 text-gray-900"
        >
          {splitName[0]} {coloredWord}
        </Typography>
        <Typography
          variant="paragraph"
          className="text-gray-600 flex justify-center items-center mb-10 text-sm text-center"
        >
          {props.subTittle}
        </Typography>
      </div>
    </div>
  );
}
