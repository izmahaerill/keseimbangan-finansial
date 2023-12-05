import { Card } from "@material-tailwind/react";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

type TData = {
  id: number;
  year: number;
  userGain: number;
  userLost: number;
};

const data: TData[] = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

Chart.register(CategoryScale);

export default function Grafik() {
  return (
    <div>
      <Card className="w-[55.5rem] px-20">
        <Bar
          data={{
            labels: data.map((current) => current.year),
            datasets: [
              {
                label: "Users Gained ",
                data: data.map((current) => current.userGain),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#f0331a",
                  "#f3ba2f",
                  "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020",
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </Card>
    </div>
  );
}
