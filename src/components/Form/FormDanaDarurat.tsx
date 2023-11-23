import { Button, Card, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";

const TABLE_HEAD = [
  "No",
  "Periode (Bulan)",
  "Tabungan (0.4%)",
  "Tabungan Berjangka (2.75%)",
];

const TABLE_ROWS = [
  {
    no: "1",
    period: "3",
    tabungan: "Rp.915.167",
    berjangka: "-",
  },
  {
    no: "2",
    period: "6",
    tabungan: "Rp.915.167",
    berjangka: "Rp.915.167",
  },
  {
    no: "3",
    period: "12",
    tabungan: "Rp.915.167",
    berjangka: "Rp.915.167",
  },
];

export default function FormDanaDarurat() {
  return (
    <>
      <div>
        <div className="flex justify-center rounded-2xl overflow-hidden">
          <Card
            color="transparent"
            shadow={true}
            className="bg-white flex justify-center shadow-2xl mb-10 w-[70%] p-10"
          >
            <div className="flex justify-center max-h-[70rem]">
              <form className="my-8 mx-8 md:w-full sm:w-96 px-10">
                <div className="pb-5 w-96 m-auto">
                  <div className="flex gap-1 justify-center pb-2">
                    <Typography className="font-bold text-3xl text-black">
                      Dana
                    </Typography>
                    <Typography className="font-bold text-3xl text-[purple] ">
                      Darurat
                    </Typography>
                    {/* <Tittle
                    name="Dana" 
                    subTittle="Pengingat tagihan dan kebutuhan adalah pesan yang digunakan untuk mengingatkan tentang pembayaran tagihan dan kebutuhan penting yang harus dipenuhi. "
                  /> */}
                  </div>
                  <p className="text-center text-[12px] leading-2">
                    Manajemen Pengeluaran adalah suatu fitur yang digunakan
                    untuk mengelola dan mengontrol pengeluaran keuangan dalam
                    sebuah rumah tangga.
                  </p>
                </div>
                <div className="mb-1 flex flex-col gap-6">
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="-mb-3"
                  >
                    Pengeluaran Bulanan Keluarga
                  </Typography>
                  <Input
                    crossOrigin={""}
                    size="md"
                    placeholder="Rp.1.000.000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full rounded-sm"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="-mb-3"
                  >
                    Hutang/Cicilan Bulanan
                  </Typography>
                  <Input
                    crossOrigin={""}
                    size="md"
                    placeholder="Rp.1.000.000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full rounded-sm"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="-mb-3"
                  >
                    Dana yang Dimiliki Sekarang (Tidak Wajib)
                  </Typography>
                  <Input
                    crossOrigin={""}
                    size="md"
                    placeholder="Rp.1.000.000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full rounded-sm"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="hidden gap-4 lg:flex justify-end mt-8">
                  <Link href={""}>
                    <Button
                      variant="filled"
                      size="sm"
                      className="bg-secondary text-gray-900 px-7 py-3 capitalize"
                    >
                      Hitung
                    </Button>
                  </Link>
                </div>
                <div className="mb-6 flex flex-col gap-6">
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="-mb-3"
                  >
                    Total Dana yang Dibutuhkan
                  </Typography>
                  <Input
                    crossOrigin={""}
                    size="md"
                    placeholder="Rp.13.200.000 - 26.400.000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full rounded-sm"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="mb-5 flex w-[50%] m-auto justify-between">
                  <div className="text-center">
                    <p>Sisa Target Minimal</p>
                    <p className="text-[20px] font-bold ">Rp.1.000.000</p>
                  </div>
                  <div className="text-center">
                    <p>Sisa Target Minimal</p>
                    <p className="text-[20px] font-bold">Rp.1.000.000</p>
                  </div>
                </div>
                <Card className="w-full shadow-none">
                  <Typography className="font-bold text-[32px] text-black pb-5">
                    Simulai Menabung
                  </Typography>
                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD.map((head) => (
                          <th key={head} className="border-b p-4 ">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="leading-none text-black font-bold"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {TABLE_ROWS.map(
                        ({ no, period, tabungan, berjangka }, index) => (
                          <tr key={no} className="border-b text-center">
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {no}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {period}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {tabungan}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                as="a"
                                href="#"
                                variant="small"
                                color="blue-gray"
                                className="font-medium"
                              >
                                {berjangka}
                              </Typography>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                  <div className="hidden gap-4 lg:flex justify-end mt-8">
                    <Link href={""}>
                      <Button
                        variant="filled"
                        size="sm"
                        className="bg-secondary text-gray-900 px-7 py-3 capitalize"
                      >
                        Download Pdf
                      </Button>
                    </Link>
                  </div>
                </Card>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
