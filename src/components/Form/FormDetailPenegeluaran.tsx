import Tittle from "@/components/Tittle";
import Elips from "@/img/Ellipse 859.png";
import img from "@/img/Group.png";
import { FormEvent } from "react";

import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function FormDetailPenegeluaran() {
  const handleSubmitManagemen = async (e: FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData.entries());
    const dateTransaksi = new Date(formDataJSON.waktuTransaksi as string);
    await axios.post("http://localhost:3000/api/managemen", {
      ...formDataJSON,
      waktuTransaksi: dateTransaksi,
    });
  };

  return (
    <div>
      <div className="flex justify-center rounded-lg shadow-2xl">
        <Card
          shadow={false}
          className="bg-white flex justify-center rounded-lg "
        >
          <div className="flex justify-center ">
            <form
              onSubmit={handleSubmitManagemen}
              className="my-8 mx-8 w-1/2 sm:w-96 "
            >
              <div>
                <Tittle
                  name="Manajemen Pengeluaran"
                  subTittle="Manajemen keuangan adalah praktik mengelola dana dan sumber daya
                      finansial untuk mencapai tujuan keuangan pribadi atau perusahaan."
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
                  name="namaPengeluaran"
                  crossOrigin={""}
                  size="lg"
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
                  <Select name="kategori" label="select">
                    <Option value="1">kebutuhan pokok</Option>
                    <Option>kebutuhan sekunder</Option>
                    <Option>kebutuhan tersier</Option>
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
                  name="waktuTransaksi"
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
                  name="jumlahPengeluaran"
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
                <Link href="/managemen/DetailSection">
                  <Button className="bg-secondary text-black">
                    Lihat Data
                  </Button>
                </Link>
                <Button type="submit" className="bg-secondary text-black">
                  Simpan
                </Button>
              </div>
            </form>
            <div className="bg-primary px-2 rounded-br-lg rounded-tr-lg">
              <Image
                className="mt-44 ml-12"
                priority
                src={img}
                alt=""
                width={329}
                height={179}
              ></Image>
              <Image
                className="-mt-5"
                src={Elips}
                alt=""
                priority
                width={429}
                height={411.18}
              ></Image>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
