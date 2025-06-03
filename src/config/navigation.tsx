import { Orders } from "../assets/icons/sidebar/ordinary/Orders";
import { Organization } from "../assets/icons/sidebar/ordinary/Organization";
import { Places } from "../assets/icons/sidebar/ordinary/Places";
import { Products } from "../assets/icons/sidebar/ordinary/Products";
import { Roles } from "../assets/icons/sidebar/ordinary/Roles";
import { ScanHistory } from "../assets/icons/sidebar/ordinary/ScanHistory";
import { Users } from "../assets/icons/sidebar/ordinary/Users";
import { Workers } from "../assets/icons/sidebar/ordinary/Workers";
import { SelectedOrders } from "../assets/icons/sidebar/selected/SelectedOrders";
import { SelectedOrganization } from "../assets/icons/sidebar/selected/SelectedOrganization";
import { SelectedPlaces } from "../assets/icons/sidebar/selected/SelectedPlaces";
import { SelectedProducts } from "../assets/icons/sidebar/selected/SelectedProducts";
import { SelectedRoles } from "../assets/icons/sidebar/selected/SelectedRoles";
import { SelectedScanHistory } from "../assets/icons/sidebar/selected/SelectedScanHistory";
import { SelectedUsers } from "../assets/icons/sidebar/selected/SelectedUsers";
import { SelectedWorkers } from "../assets/icons/sidebar/selected/SelectedWorkers";
import type { NavItem } from "../types/nav.types";

export const navigationItems: NavItem[] = [
  {
    id: "Organization",
    label: "Organization",
    href: "#",
    icon: <Organization />,
    active: <SelectedOrganization />,
  },
  {
    id: "Roles",
    label: "Roles",
    href: "#",
    icon: <Roles />,
    active: <SelectedRoles />,
  },
  {
    id: "Users",
    label: "Users",
    href: "#",
    icon: <Users />,
    active: <SelectedUsers />,
  },
  {
    id: "Workers",
    label: "Workers",
    href: "#",
    icon: <Workers />,
    active: <SelectedWorkers />,
  },
  {
    id: "Places",
    label: "Places",
    href: "#",
    icon: <Places />,
    active: <SelectedPlaces />,
  },
  {
    id: "Products",
    label: "Products",
    href: "#",
    icon: <Products />,
    active: <SelectedProducts />,
  },
  {
    id: "Orders",
    label: "Orders",
    href: "#",
    icon: <Orders />,
    active: <SelectedOrders />,
  },
  {
    id: "Scan history",
    label: "Scan history",
    href: "#",
    icon: <ScanHistory />,
    active: <SelectedScanHistory />,
  },
];
