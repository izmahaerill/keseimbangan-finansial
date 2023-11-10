import Footer from "@/components/Footer";
import FormSection from "@/components/Form/FormPengingat";
import HeroImage from "@/components/HeroImage";
import Nav from "@/components/Nav";

export default function Managemen() {
  return (
    <div>
      <Nav />
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[27.9rem] z-10">
          <FormSection />
        </div>
      </div>
      <footer className="mt-[50rem]">
        <Footer />
      </footer>
    </div>
  );
}
