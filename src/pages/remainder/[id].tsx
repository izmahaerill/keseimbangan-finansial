import HeroImage from "@/components/HeroImage";
import { REMAINDER } from "@/constatants";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function RemainderId() {
  const [data, setData] = useState<boolean[]>();
  const router = useRouter();

  useEffect(() => {
    let getData: boolean[] = [];

    if (router.isReady) {
      const id = router.query.id as string;
      getData = REMAINDER.map((item) => item.id === parseInt(id));
    }
    setData(getData);
  }, [router]);

  return (
    <>
      <div className="mt-[10rem]">
        <HeroImage />
      </div>
      <div className="flex justify-center rounded-2xl ">
        <Card className="bg-gray-300">
          <div className="flex flex-col gap-5 justify-center items-center">
            <Typography variant="h3" className="">
              Detail Remainder
            </Typography>
            <Typography variant="h5">
              Manajemen Pengeluaran adalah suatu fitur yang digunakan untuk
              mengelola dan mengontrol pengeluaran keuangan dalam sebuah rumah
              tangga.
            </Typography>
          </div>
          <div>
            <div>
              <Button>Filter</Button>
            </div>
            <Input placeholder="Search" crossOrigin={""}></Input>
          </div>
        </Card>
      </div>
    </>
  );
}
