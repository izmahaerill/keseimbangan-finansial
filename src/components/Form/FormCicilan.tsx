import { Button, Card, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";

const TABLE_HEAD = ["Bulan", "Pokok", "Bunga", "Total", "Sisa Pokok"];

const TABLE_ROWS = [
  {
    bulan: "1",
    pokok: "Rp. 84.000",
    bunga: "Rp. 833",
    total: "Rp. 84.833",
    sisa_pokok: "915.167",
  },
  {
    bulan: "2",
    pokok: "Rp. 84.000",
    bunga: "Rp. 833",
    total: "Rp. 84.833",
    sisa_pokok: "Rp.830.334",
  },
  {
    bulan: "3",
    pokok: "Rp. 84.000",
    bunga: "Rp. 833",
    total: "Rp. 84.833",
    sisa_pokok: "Rp.745.501",
  },
];

export default function FormCicilan() {
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
                      Cicilan
                    </Typography>
                    <Typography className="font-bold text-3xl text-[purple] ">
                      Pinjaman
                    </Typography>
                    {/* <Tittle
                    name="Dana" 
                    subTittle="Pengingat tagihan dan kebutuhan adalah pesan yang digunakan untuk mengingatkan tentang pembayaran tagihan dan kebutuhan penting yang harus dipenuhi. "
                  /> */}
                  </div>
                  <p className="text-center text-[12px] leading-2">
                    Cicilan pinjaman adalah pembayaran berkala yang dilakukan
                    oleh peminjam kepada pemberi pinjaman sebagai bagian dari
                    pengembalian pinjaman yang diberikan.
                  </p>
                </div>
                <div className="mb-1 flex flex-col gap-6">
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="-mb-3"
                  >
                    Jumlah Pinjaman
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
                    Suku Bunga Tahunan
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
                    Jangka Waktu Cicilan
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
                    Cicilan Pinjaman
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
                {/* <div className="mb-5 flex w-[50%] m-auto justify-between">
                  <div className="text-center">
                    <p>Sisa Target Minimal</p>
                    <p className="text-[20px] font-bold ">Rp.1.000.000</p>
                  </div>
                  <div className="text-center">
                    <p>Sisa Target Minimal</p>
                    <p className="text-[20px] font-bold">Rp.1.000.000</p>
                  </div>
                </div> */}
                <Card className="w-full shadow-none">
                  <Typography className="font-bold text-[32px] text-black pb-5">
                    Simulai Pembayaran
                  </Typography>
                  <table className="w-full min-w-max table-auto text-center">
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
                        ({ bulan, pokok, bunga, total, sisa_pokok }, index) => (
                          <tr key={bulan} className=" border-b text-center">
                            <td className=" p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {bulan}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {pokok}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {bunga}
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
                                {total}
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
                                {sisa_pokok}
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
