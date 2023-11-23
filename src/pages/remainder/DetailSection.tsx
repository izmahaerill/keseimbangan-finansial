import FormSection from "@/components/Form/FormPengingat";
// import PengingatSection from "@/components/CalcSection/PengingatSection";
import HeroImage from "@/components/HeroImage";

export default function Remainder() {
  return (
    <div>
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[29.7rem] z-10">
          <FormSection />
          {/* <PengingatSection /> */}
        </div>
      </div>
    </div>
  );
}
