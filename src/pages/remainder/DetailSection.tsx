import FormSection from "@/components/Form/FormPengingat";
// import PengingatSection from "@/components/CalcSection/PengingatSection";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";
import Navbar from "@/components/Navbars";

export default function Remainder() {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[29.7rem] z-10">
          <FormSection />
          {/* <PengingatSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
