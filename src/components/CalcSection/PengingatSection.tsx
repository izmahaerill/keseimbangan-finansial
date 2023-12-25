import Tittle from "@/components/Tittle";
import { TABLE_ROWS } from "@/constatants";
import { PengingatType } from "@/interfaces";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

const TABLE_HEAD = [
  "No",
  "Pengeluaran",
  "Kategori",
  "Waktu Pengeluaran",
  "Jumlah Pengeluaran",
];

export default function PengingatSection() {
  const [dataPengingat, setDataPengingat] = useState<PengingatType[]>([]);

  const handleGetData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/pengingat");
      setDataPengingat(data);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div>
      <Card className="rounded-lg shadow-2xl ">
        <div className="flex justify-center">
          <div className="px-16 w-[35rem] mt-20">
            <Tittle
              name="Detail Pengingat"
              subTittle="Manajemen Pengeluaran adalah suatu fitur yang digunakan untuk mengelola dan mengontrol pengeluaran keuangan dalam sebuah rumah tangga."
            />
          </div>
        </div>
        <div className="flex gap-[25rem] px-12 ">
          <Button
            size="sm"
            className="bg-secondary flex justify-center items-center text-anjirr gap-4 capitalize"
          >
            Filter
            {
              <Icon
                icon="solar:filter-linear"
                className="text-gray-900 h-4 w-4"
              />
            }
          </Button>
          <Input
            className=""
            placeholder="Search"
            crossOrigin={""}
            icon={
              <Icon
                icon="mingcute:search-line"
                className="text-xl text-gray-900 h-4 w-4  "
              />
            }
          />
        </div>

        {/* form */}

        <Card>
          <table
            className="w-full min-w-max table-auto text-left mt-5 mb-10"
            style={{ boxShadow: "none" }}
          >
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-50  p-4">
                    <Typography
                      variant="small"
                      className="font-normal text-anjirr px-[33.3px]"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataPengingat.map(
                (
                  {
                    id,
                    jumlahPengeluaran,
                    namaPengeluaran,
                    kategori,
                    waktuDiingatkan,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4  "
                    : "p-4 border-b border-blue-gray-50 ";

                  return (
                    <tr key={id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal flex justify-center"
                        >
                          {index + 1}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal flex justify-center"
                        >
                          {namaPengeluaran}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal flex justify-center"
                        >
                          {kategori}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal flex justify-center"
                        >
                          {new Date(waktuDiingatkan).toDateString()}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal flex justify-center border-none"
                        >
                          {jumlahPengeluaran}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
          <div className="flex justify-end mb-20 mr-12 ">
            <Button className="bg-secondary text-black">Edit</Button>
          </div>
        </Card>

        {/* end form */}
      </Card>
    </div>
  );
}
