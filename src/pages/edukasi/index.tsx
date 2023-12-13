import Layout from "@/components/Layout/Layout";
import SideBar from "@/components/SideBar";
import VideoSec from "@/components/VideoSec";
import { VIDEDUCATION } from "@/constatants";
import { Typography } from "@material-tailwind/react";

export default function Edukasi() {
  const data = VIDEDUCATION.map((item) => item.name);

  const handleChange = () => {
    //
  };

  return (
    <Layout>
      <div>
        <div className="ml-14">
          <Typography variant="h2">
            Ingin menambah pengetahuan tentang keuangan?
          </Typography>
          <Typography className="font-normal text-gray-600">
            Yuk, pahami berbagai strategi keuangan untuk menuju finansial yang
            lebih baik
          </Typography>
        </div>
        <div className="mx-14">
          <div className="flex justify-center items-start mt-20 gap-3">
            <div className="">
              <SideBar name={data} handleChange={handleChange} />
            </div>
            <div className="">
              <VideoSec name={data} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
