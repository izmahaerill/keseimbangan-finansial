import Footer from "@/components/Footer";
import FormCicilan from "@/components/Form/FormCicilan";
import HeroImage from "@/components/HeroImage";
import Navbars from "@/components/Navbars";

export default function cicilanPinjaman() {
  return (
    <div>
      <Navbars />
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[27.3rem] z-10 w-full">
          <FormCicilan />
        </div>
      </div>
      <footer className="mt-[70rem]">
        <Footer />
      </footer>
    </div>
  );
}
