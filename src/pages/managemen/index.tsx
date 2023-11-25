import Footer from "@/components/Footer";
import FormDetailPenegeluaran from "@/components/Form/FormDetailPenegeluaran";
import HeroImage from "@/components/HeroImage";
import Navbar from "@/components/Navbars";

export default function Managemen() {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[29.7rem] z-10">
          <FormDetailPenegeluaran />
        </div>
      </div>
      <Footer />
    </div>
  );
}
