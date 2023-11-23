import Footer from "@/components/Footer";
import FormDetailPenegeluaran from "@/components/Form/FormDetailPenegeluaran";
import HeroImage from "@/components/HeroImage";
import Navbars from "@/components/Navbars";

export default function Managemen() {
  return (
    <div>
      <Navbars />
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[29.7rem] z-10">
          <FormDetailPenegeluaran />
        </div>
      </div>
      <footer className="mt-[50rem]">
        <Footer />
      </footer>
    </div>
  );
}