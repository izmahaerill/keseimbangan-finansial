import Tittle from "@/components/Tittle";
import img from "@/img/8351256_3885981 1.png";
import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function FormSection() {
  return (
    <>
      <div>
        <div className="flex justify-center rounded-2xl overflow-hidden">
          <Card
            color="transparent"
            shadow={true}
            className="bg-white flex justify-center shadow-2xl mb-10 "
          >
            <div className="flex justify-center max-h-[50rem]">
              <form className="my-8 mx-8 w-1/2 sm:w-96 ">
                <div>
                  <Tittle
                    name="Pengingat"
                    subTittle="Pengingat tagihan dan kebutuhan adalah pesan yang digunakan untuk mengingatkan tentang pembayaran tagihan dan kebutuhan penting yang harus dipenuhi. "
                  />
                </div>
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
                <div className="hidden gap-4 lg:flex justify-end mt-8">
                  <Link href={""}>
                    <Button
                      variant="filled"
                      size="sm"
                      className="bg-secondary text-gray-900"
                    >
                      Lihat Data
                    </Button>
                  </Link>
                  <Link href={""}>
                    <Button
                      variant="filled"
                      size="sm"
                      className="bg-secondary text-gray-900"
                    >
                      Simpan
                    </Button>
                  </Link>
                </div>
              </form>
              <div className="bg-primary overflow-hidden">
                <Image
                  className="mt-44"
                  priority
                  src={img}
                  alt=""
                  width={445}
                  height={179}
                ></Image>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
