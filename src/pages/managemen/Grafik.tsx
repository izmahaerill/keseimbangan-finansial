import Grafik from "@/components/Grafik";
import HeroImage from "@/components/HeroImage";
import Layout from "@/components/Layout/Layout";

export default function Managemen() {
  return (
    <Layout>
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[29.7rem] z-10">
          <Grafik />
        </div>
      </div>
    </Layout>
  );
}
