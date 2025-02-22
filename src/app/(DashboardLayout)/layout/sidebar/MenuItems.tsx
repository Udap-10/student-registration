import {
  IconBellRinging,
  IconChartBar,
  IconLayoutDashboard,
  IconSettings,
  IconUsersGroup,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Notification",
    icon: IconBellRinging,
    href: "/Notification-Page",
  },
  {
    id: uniqueId(),
    title: "About Us",
    icon: IconUsersGroup,
    href: "/AboutUs-Page",
  },

  {
    id: uniqueId(),
    title: "Data Analysis",
    icon: IconChartBar,
    href: "/DataAnalysis-Page",
  },
  {
    id: uniqueId(),
    title: "Setting",
    icon: IconSettings,
    href: "/setting-page",
  },
];

export default Menuitems;
