import Layout from "@/components/Layout/Layout";
import { VIDEO_EDUCATION } from "@/constatants";
import { VideoData } from "@/interfaces";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Edukasi() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const router = useRouter();

  const filteredData: VideoData[] = selectedCategory
    ? VIDEO_EDUCATION.find((item) => item.name === selectedCategory)?.data || []
    : [];

  useEffect(() => {
    setSelectedCategory(
      VIDEO_EDUCATION.length > 0 ? VIDEO_EDUCATION[0].name : null
    );
  }, []);

  return (
    <Layout>
      <div className="mt-36 container mx-14">
        <Typography variant="h2">
          Ingin menambah pengetahuan tentang keuangan?
        </Typography>
        <Typography variant="paragraph" color="gray" className="mb-10">
          Yuk, pahami berbagai strategi keuangan untuk menuju finansial yang
          lebih baik
        </Typography>
        <div className="flex gap-6 mt-16">
          <div>
            <Typography variant="h3" className="mb-5">
              Kategori
            </Typography>
            <Card className="w-56">
              <List>
                {VIDEO_EDUCATION.map(({ id, name }) => (
                  <ListItem key={id} onClick={() => setSelectedCategory(name)}>
                    <Typography variant="paragraph">{name}</Typography>
                  </ListItem>
                ))}
              </List>
            </Card>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {filteredData.map(({ id, title, src, duration, category }) => (
              <Card
                key={id}
                onClick={() => router.replace(`/edukasi/${id}`)}
                className="cursor-pointer shadow-lg w-[19rem]"
              >
                <CardHeader floated={false}>
                  <iframe
                    src={src}
                    title={title}
                    allowFullScreen
                    className=" w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray">
                    {title}
                  </Typography>
                </CardBody>
                <CardFooter>
                  <div className="flex gap-2 mb-5">
                    {category.map((name, index) => (
                      <Typography
                        key={index}
                        variant="small"
                        color="black"
                        className={`${
                          index % 2 ? "bg-yellow-100" : "bg-purple-100"
                        } px-2 py-1 rounded-full`}
                      >
                        {name}
                      </Typography>
                    ))}
                  </div>
                  <Typography variant="paragraph">{duration}</Typography>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
