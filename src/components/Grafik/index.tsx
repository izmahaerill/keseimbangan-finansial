import Tittle from "@/components/Tittle";
import { Card } from "@material-tailwind/react";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

type TData = {
  id: number;
  month: string;
  userGain: number;
  userLost: number;
};

const data: TData[] = [
  {
    id: 1,
    month: "XS",
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 2,
    month: "S",
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 3,
    month: "M",
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 4,
    month: "M",
    userGain: 4300,
    userLost: 234,
  },
  {
    id: 5,
    month: "XL",
    userGain: 4000,
    userLost: 5000,
  },
  {
    id: 6,
    month: "XXL",
    userGain: 4000,
    userLost: 5000,
  },
];

Chart.register(CategoryScale);

export default function Grafik() {
  return (
    <div>
      <Card className="w-[55.5rem] px-20 rounded-lg">
        <div className=" flex justify-center items-center px-36 mt-20">
          <Tittle
            name="Grafik Pengeluaran"
            subTittle="Manajemen Pengeluaran adalah suatu fitur yang digunakan untuk mengelola dan mengontrol pengeluaran keuangan dalam sebuah rumah tangga."
          />
        </div>
        <div className="mb-16 shadow-md px-14 py-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-anjirr font-sans font-semibold">
              Total Pengeluaran
            </h2>
            <h1 className="text-anjirr text-2xl font-semibold font-sans">
              5.987,34
            </h1>
            <h4 className="font-sans text-xs">Tahun 2023</h4>
          </div>
          <Bar
            data={{
              labels: data.map((current) => current.month),
              datasets: [
                {
                  label: "Users Gained ",
                  data: data.map((current) => current.userGain),
                  backgroundColor: [
                    "#F94144",
                    "#F3722C",
                    "#F8961E",
                    "#F9C74F",
                    "#90BE6D",
                    "#2D9CDB",
                  ],
                  borderColor: "black",
                  borderWidth: 2,
                  barThickness: 20,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
          <div className="flex gap-10">
            <div className="flex gap-2 items-center ">
              <div className="h-3 w-3 bg-[#F94144]  rounded-full"></div>
              <h4>Januari</h4>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="h-3 w-3 bg-[#F3722C]  rounded-full"></div>
              <h4>Februari</h4>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="h-3 w-3 bg-[#F8961E]  rounded-full"></div>
              <h4>Maret</h4>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="h-3 w-3 bg-[#F9C74F]  rounded-full"></div>
              <h4>April</h4>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="h-3 w-3 bg-[#90BE6D]  rounded-full"></div>
              <h4>Mei</h4>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="h-3 w-3 bg-[#2D9CDB]  rounded-full"></div>
              <h4>Juni</h4>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
