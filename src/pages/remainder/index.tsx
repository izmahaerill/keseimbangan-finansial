import Footer from "@/components/Footer";
import FormSection from "@/components/Form/FormPengingat";
import HeroImage from "@/components/HeroImage";
import Navbars from "@/components/Navbars";

export default function Remainder() {
  return (
    <div>
      <Navbars />
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[27.3rem] z-10">
          <FormSection />
        </div>
      </div>
      <footer className="mt-[50rem]">
        <Footer />
      </footer>
    </div>
  );
}
