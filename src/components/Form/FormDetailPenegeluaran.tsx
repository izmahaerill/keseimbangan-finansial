import Tittle from "@/components/Tittle";
import Elips from "@/img/Ellipse 859.png";
import img from "@/img/Group.png";
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

export default function FormDetailPenegeluaran() {
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-center">
            <Card shadow={false} className="bg-white flex justify-center">
              <div className="flex justify-center ">
                <form className="my-8 mx-8 w-1/2 sm:w-96 ">
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
      </div>
    </div>
  );
}
