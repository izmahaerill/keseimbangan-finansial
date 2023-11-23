import Tittle from "@/components/Tittle";
import { TABLE_ROWS } from "@/constatants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Card, Input, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "No",
  "Pengeluaran",
  "Kategori",
  "Waktu Pengeluaran",
  "Jumlah Pengeluaran",
];

export default function PengingatSection() {
  return (
    <div>
      <Card className="rounded-lg shadow-2xl">
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
            className="bg-secondary flex justify-center items-center gap-4 capitalize"
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
            className="w-full min-w-max table-auto text-left mt-5 mb-20"
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
              {TABLE_ROWS.map(
                ({ id, pengeluaran, kategori, date, spending }, index) => {
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
                          {id}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal flex justify-center"
                        >
                          {pengeluaran}
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
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal flex justify-center border-none"
                        >
                          {spending}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Card>

        {/* end form */}
      </Card>
    </div>
  );
}
