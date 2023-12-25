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
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

export default function FormDetailPenegeluaran() {
  const handleSubmitPengingat = async (e: FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData.entries());
    const dateTransaksi = new Date(formDataJSON.WaktuDiIngatkan as string);
    const dataReq = {
      ...formDataJSON,
      waktuDiIngatkan: dateTransaksi,
      kategori: category,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/pengingat",
        dataReq
      );

      console.log(data.message);
    } catch (e: any) {
      console.log(e.response.data.message);
    }
  };

  const [category, setCategory] = useState("kebutuhan pokok");

  return (
    <div>
      <div className="flex justify-center rounded-lg shadow-2xl">
        <Card
          shadow={false}
          className="bg-white flex justify-center rounded-lg "
        >
          <div className="flex justify-center ">
            <form
              onSubmit={handleSubmitPengingat}
              className="my-8 mx-8 w-1/2 sm:w-96 "
            >
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
                  name="namaPengeluaran"
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
                  <Select
                    name="kategori"
                    label="select"
                    selected={(element) => {
                      setCategory(element?.props.children);
                      return (
                        element &&
                        React.cloneElement(element, {
                          disabled: true,
                          className:
                            "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
                        })
                      );
                    }}
                  >
                    <Option>kebutuhan pokok</Option>
                    <Option>kebutuhan sekunder</Option>
                    <Option>kebutuhan tersier</Option>
                  </Select>
                </div>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="-mb-3"
                >
                  Waktu Di Ingatkan
                </Typography>
                <Input
                  crossOrigin={""}
                  name="WaktuDiIngatkan"
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
                <Link href="/remainder/DetailSection">
                  <Button className="bg-secondary text-black">
                    Lihat Data
                  </Button>
                </Link>
                <Button className="bg-secondary text-black" type="submit">
                  Simpan
                </Button>
              </div>
            </form>
            <div className="bg-primary rounded-br-lg rounded-tr-lg">
              <Image
                className="mt-44 rounded-br-lg"
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
  );
}
