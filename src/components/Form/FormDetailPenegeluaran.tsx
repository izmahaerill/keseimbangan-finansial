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
import HeroImage from "../HeroImage";

export default function FormDetailPenegeluaran() {
  return (
    <div>
      <div>
        <HeroImage />
      </div>
      <div>
        <div>
          <div className="flex flex-col justify-center items-center mb-2">
            <Typography
              children
              variant="h5"
              className="flex justify-center mb-5"
            ></Typography>
            Manajemen Pengeluaran
            <Typography
              variant="paragraph"
              className="text-gray-500 flex justify-center items-center mb-10 text-sm w-2/3 text-center"
            >
              Manajemen keuangan adalah praktik mengelola dana dan sumber daya
              finansial untuk mencapai tujuan keuangan pribadi atau perusahaan.
            </Typography>
          </div>
          <div className="flex justify-center">
            <Card shadow={false} className="bg-white flex justify-center">
              <div className="flex justify-center ">
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
                  <div className="flex justify-end gap-5 mt-10 ">
                    <Link href="#buttons-with-link">
                      <Button className="bg-secondary text-black">
                        Lihat Data
                      </Button>
                    </Link>
                    <Link href="#buttons-with-link">
                      <Button className="bg-secondary text-black">
                        Simpan
                      </Button>
                    </Link>
                  </div>
                </form>
                <div className="bg-primary">
                  <Image
                    priority
                    src={img}
                    alt=""
                    width={529}
                    height={179}
                  ></Image>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
