import Footer from "@/components/Footer";
import FormDetailPenegeluaran from "@/components/Form/FormDetailPenegeluaran";
import HeroImage from "@/components/HeroImage";
import Nav from "@/components/Nav";

export default function Managemen() {
  return (
    <div>
      <Nav />
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[27.9rem] z-10">
          <FormDetailPenegeluaran />
        </div>
      </div>
      <footer className="mt-[50rem]">
        <Footer />
      </footer>
    </div>
  );
}
