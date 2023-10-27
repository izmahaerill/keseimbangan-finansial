import img from "@/img/8351256_3885981 1.png";
import {
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

export default function FormSection() {
  return (
    <>
      <div>
        <div>
          <div className="flex flex-col justify-center items-center mb-2">
            <Typography variant="h5" className="flex justify-center mb-5">
              Managemen Pengeluaran
            </Typography>
            <Typography
              variant="paragraph"
              className="text-gray-500 flex justify-center items-center mb-10 text-sm w-2/3 text-center"
            >
              Manajemen keuangan adalah praktik mengelola dana dan sumber daya
              finansial untuk mencapai tujuan keuangan pribadi atau perusahaan.
            </Typography>
          </div>
          <div className="flex justify-center">
            <Card
              color="transparent"
              shadow={false}
              className="bg-gray-300 flex justify-center"
            >
              <div className="flex justify-center ">
                <div className="bg-primary">
                  <Image src={img} alt="" width={279} height={179}></Image>
                </div>
                <form className="my-8 mx-8 w-1/2 sm:w-96 ">
                  <div className="mb-1 flex flex-col gap-6">
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Nama Pengeluaran
                    </Typography>
                    <Input
                      crossOrigin={""}
                      size="lg"
                      placeholder="name@mail.com"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Kategori
                    </Typography>
                    <div>
                      <Select label="select">
                        <Option>Material HTML</Option>
                        <Option>Material React</Option>
                        <Option>Material Vue</Option>
                        <Option>Material Angular</Option>
                        <Option>Material Svelte</Option>
                      </Select>
                    </div>
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Waktu Transaksi
                    </Typography>
                    <Input
                      crossOrigin={""}
                      type="date"
                      placeholder="Kategori"
                      className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      containerProps={{
                        className: "min-w-0",
                      }}
                    />
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Jumlah Pengeluaran
                    </Typography>
                    <Input
                      crossOrigin={""}
                      type="number"
                      placeholder="Rp.10.000"
                      className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      containerProps={{
                        className: "min-w-0",
                      }}
                    />
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
