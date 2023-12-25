import FormDetailPenegeluaran from "@/components/Form/FormDetailPenegeluaran";
import HeroImage from "@/components/HeroImage";
import Layout from "@/components/Layout/Layout";

export default function Managemen() {
  return (
    <Layout>
      <div className="mt-[10rem]">
        <HeroImage />
      </div>{" "}
      <div className="flex justify-center">
        <div className="absolute top-[29.7rem] z-10">
          <FormDetailPenegeluaran />
        </div>
      </div>
    </Layout>
  );
}
