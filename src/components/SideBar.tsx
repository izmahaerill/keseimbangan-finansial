import {
  CreditCardIcon,
  InboxIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import {
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export default function SideBar() {
  return (
    <div className="h-96 mt-40 w-full max-w-[18rem] mr-6">
      <div className="mb-2 pt-0 ">
        <Typography variant="h3" color="blue-gray">
          Kategori
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Pengelolaan Keuangan
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <CreditCardIcon className="h-5 w-5" />
          </ListItemPrefix>
          Investasi dan Tabungan
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Managemen Utang
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserGroupIcon className="h-5 w-5" />
          </ListItemPrefix>
          Keuangan Keluarga
        </ListItem>
      </List>
    </div>
  );
}
