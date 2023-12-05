import FormDetailPenegeluaran from "@/components/Form/FormDetailPenegeluaran";
// import FormDetailPenegeluaran from "@/components/Form/FormDetailPenegeluaran";
// import Grafik from "@/components/Grafik";
// import PengingatSection from "@/components/CalcSection/PengingatSection";
import HeroImage from "@/components/HeroImage";
import Layout from "@/components/Layout/Layout";

export default function Managemen() {
  return (
    <Layout>
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[29.7rem] z-10">
          <FormDetailPenegeluaran />
          {/* <PengingatSection /> */}
          {/* <Grafik /> */}
        </div>
      </div>
    </Layout>
  );
}
