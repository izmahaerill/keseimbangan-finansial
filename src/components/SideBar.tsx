import { PresentationChartBarIcon } from "@heroicons/react/24/solid";
import {
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export default function SideBar({
  name,
  handleChange,
}: {
  name: any[];
  handleChange: () => void;
}) {
  return (
    <div className=" w-full max-w-[18rem]">
      <div className="mb-2 pt-0 ">
        <Typography variant="h3" color="blue-gray">
          Kategori
        </Typography>
      </div>
      <List>
        {name.map((item) => (
          <ListItem onClick={handleChange}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            {item}
          </ListItem>
        ))}
      </List>
    </div>
  );
}
