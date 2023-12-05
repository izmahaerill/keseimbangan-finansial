import FormDanaDarurat from "@/components/Form/FormDanaDarurat";
import HeroImage from "@/components/HeroImage";
import Layout from "@/components/Layout/Layout";

export default function cicilanPinjaman() {
  return (
    <Layout>
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[29.7rem] z-10 w-full">
          <FormDanaDarurat />
        </div>
      </div>
    </Layout>
  );
}
