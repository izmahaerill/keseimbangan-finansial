import FormCicilan from "@/components/Form/FormCicilan";
import HeroImage from "@/components/HeroImage";
import Layout from "@/components/Layout/Layout";

export default function cicilanPinjaman() {
  return (
    <Layout>
      <div className="mt-[10rem]">
        <HeroImage />
      </div>
      <div className="flex justify-center">
        <div className="absolute top-[29.7rem] z-10 w-full">
          <FormCicilan />
        </div>
      </div>
    </Layout>
  );
}
