import Footer from "@/components/Footer";
import FormDanaDarurat from "@/components/Form/FormDanaDarurat";
import HeroImage from "@/components/HeroImage";
import Navbars from "@/components/Navbars";

export default function Remainder() {
  return (
    <div>
      <Navbars />
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[27.3rem] z-10 w-full">
          <FormDanaDarurat />
        </div>
      </div>
      <footer className="mt-[70rem]">
        <Footer />
      </footer>
    </div>
  );
}
