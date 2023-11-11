import Tittle from "@/components/Tittle";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Card, Input } from "@material-tailwind/react";

export default function PengingatSection() {
  return (
    <div>
      <Card>
        <Tittle
          name="Detail Pengingat"
          subTittle="Manajemen Pengeluaran adalah suatu fitur yang digunakan untuk mengelola dan mengontrol pengeluaran keuangan dalam sebuah rumah tangga."
        />
        <div className="flex justify-between px-10">
          <Input
            className="flex justify-end"
            placeholder="Search"
            crossOrigin={""}
            icon={
              <Icon
                icon="mingcute:search-line"
                className="text-xl text-gray-900 h-8 w-8"
              />
            }
          />
          <Button>
            Filter
            {
              <Icon
                icon="solar:filter-linear"
                className="text-xl text-gray-900 h-8 w-8"
              />
            }
            crossOrigin={undefined}
          </Button>
        </div>
        <div>
          <form action=""></form>
        </div>
      </Card>
    </div>
  );
}
