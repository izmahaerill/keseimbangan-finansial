import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbars";
import Tittle from "@/components/Tittle";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Card, Input } from "@material-tailwind/react";
export default function DanaDarurat() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Card>
        <Tittle
          name="Dana Darurat"
          subTittle="Manajemen Pengeluaran adalah suatu fitur yang digunakan untuk mengelola dan mengontrol pengeluaran keuangan dalam sebuah rumah tangga."
        ></Tittle>
        <form action="" className="">
          <label htmlFor="">Pengeluaran Bulanan Keluarga</label>
          <Input
            crossOrigin={""}
            icon={
              <Icon
                icon="tabler:info-square-rounded"
                className="text-xl text-gray-900"
              />
            }
          />
          <label htmlFor="">
            Hutang/Cicilan Bulanan icon=
            {
              <Icon
                icon="tabler:info-square-rounded"
                className="text-xl text-gray-900"
              />
            }
          </label>
          <Input
            crossOrigin={""}
            icon={
              <Icon
                icon="tabler:info-square-rounded"
                className="text-xl text-gray-900"
              />
            }
          />
          <label htmlFor="">Dana yang Dimiliki Sekarang (Tidak Wajib) </label>
          <Input
            crossOrigin={""}
            icon={
              <Icon
                icon="tabler:info-square-rounded"
                className="text-xl text-gray-900"
              />
            }
          />
          <Button>Hitung</Button>
        </form>
        <div>
          <label htmlFor="">Total Dana yang Dibutuhkan</label>
          <Input
            crossOrigin={""}
            icon={
              <Icon
                icon="tabler:info-square-rounded"
                className="text-xl text-gray-900"
              />
            }
          />
        </div>
        <div>
          <label htmlFor="">Total Dana yang Dibutuhkan</label>
          <Input
            crossOrigin={""}
            icon={
              <Icon
                icon="tabler:info-square-rounded"
                className="text-xl text-gray-900"
              />
            }
          />
        </div>
      </Card>
    </div>
  );
}
