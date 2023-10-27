import HeroImage from "@/components/HeroImage";
import { REMAINDER } from "@/constatants";
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
      <div>
        <HeroImage />
      </div>
    </>
  );
}
