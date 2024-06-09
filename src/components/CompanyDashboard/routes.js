import Dashboard from "./layouts/dashboard";
import Profile from "./layouts/profile";
import Notifications from "./layouts/notifications";
import SignOut from "./layouts/authentication/sign-out";
import Sales from "./layouts/Sales";
import Orders from "./layouts/dashboard/orders";
import Inward_Orders from "./layouts/dashboard/inward_order";
import Gate from "./layouts/dashboard/gate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Weighment from "./layouts/dashboard/weighment";
import Grn from "./layouts/dashboard/grn";
import Purchase from "./layouts/dashboard/purchase";
import Transporting from "./layouts/dashboard/transporting";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

// @mui icons
import Icon from "@mui/material/Icon";
import Pending from "./layouts/dashboard/pending";
import Dispatch from "./layouts/dashboard/dispatch";
import Billing from "./layouts/dashboard/billing";
import Invoice from "./layouts/dashboard/invoice";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Sales",
    key: "sales",
    icon: <Icon fontSize="small">description</Icon>,
    route: "/sales",
    component: <Sales />,
  },
  {
    type: "collapse",
    name: "Orders",
    key: "orders",
    icon: <Icon fontSize="small">shopping_cart</Icon>,
    route: "/dashboard/orders",
    component: <Orders />,
  },
  {
    type: "collapse",
    name: "Inward Orders",
    key: "inward_order",
    icon: <Icon fontSize="small">inventory</Icon>,
    route: "/dashboard/inward_order",
    component: <Inward_Orders />,
  },
  {
    type: "collapse",
    name: "Gate",
    key: "gate",
    icon: <FontAwesomeIcon icon={faSignInAlt} />,
    route: "/dashboard/gate",
    component: <Gate />,
  },  
  {
    type: "collapse",
    name: "Weighment",
    key: "Weighment",
    icon: <Icon fontSize="small">scale</Icon>,
    route: "/dashboard/weighment",
    component: <Weighment />,
  },
  {
    type: "collapse",
    name: "GRN",
    key: "grn",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/dashboard/grn",
    component: <Grn />,
  },
  {
    type: "collapse",
    name: "Purchase",
    key: "purchase",
    icon: <Icon fontSize="small">shoppingbasket</Icon>,
    route: "/dashboard/purchase",
    component: <Purchase />,
  },
  {
    type: "collapse",
    name: "Transporting",
    key: "transporting",
    icon: <Icon fontSize="small">local_shipping</Icon>,
    route: "/dashboard/transporting",
    component: <Transporting />,
  },
  {
    type: "collapse",
    name: "Pending Vehicles",
    key: "pending",
    icon: <HourglassEmptyIcon icon={faSignInAlt} />, 
    route: "/dashboard/pending",
    component: <Pending />,
  },
  {
    type: "collapse",
    name: "Dispatch",
    key: "dispatch",
    icon: <Icon fontSize="small">delivery_dining</Icon>,
    route: "/dashboard/dispatch",
    component: <Dispatch />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt</Icon>,
    route: "/dashboard/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Invoice",
    key: "invoice",
    icon: <Icon fontSize="small">event_note</Icon>,
    route: "/dashboard/invoice",
    component: <Invoice />,
  },
  {
    type: "collapse",
    name: "Sign out",
    key: "sign-out",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-out",
    component: <SignOut />,
  },
];

export default routes;
