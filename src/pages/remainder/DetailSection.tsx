import PengingatSection from "@/components/CalcSection/PengingatSection";
import HeroImage from "@/components/HeroImage";
import Layout from "@/components/Layout/Layout";

export default function Remainder() {
  return (
    <Layout>
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[29.7rem] z-10">
          <PengingatSection />
        </div>
      </div>
    </Layout>
  );
}
