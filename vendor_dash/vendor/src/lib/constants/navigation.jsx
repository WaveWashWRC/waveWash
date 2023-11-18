import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/home/dashboard",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "profile",
    label: "Profile",
    path: "/home/profile",
    icon: <HiOutlineCube />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/home/orders",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/home/transactions",
    icon: <HiOutlineDocumentText />,
  },
  //   {
  //     key: "messages",
  //     label: "Messages",
  //     path: "/messages",
  //     icon: <HiOutlineAnnotation />,
  //   },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
