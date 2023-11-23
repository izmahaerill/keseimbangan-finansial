import FormDetailPenegeluaran from "@/components/Form/FormDetailPenegeluaran";
import HeroImage from "@/components/HeroImage";

export default function Managemen() {
  return (
    <div>
      <HeroImage />
      <div className="flex justify-center">
        <div className="absolute top-[29.7rem] z-10">
          <FormDetailPenegeluaran />
        </div>
      </div>
    </div>
  );
}
