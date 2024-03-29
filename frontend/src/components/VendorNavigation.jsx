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
    key: "profile",
    label: "Profile",
    path: "/profile",
    icon: <HiOutlineCube />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiOutlineShoppingCart />,
  },
  // {
  //   key: "transactions",
  //   label: "Transactions",
  //   path: "/transactions",
  //   icon: <HiOutlineDocumentText />,
  // },
  {
    key: "ads",
    label: "Ads",
    path: "/ads",
    icon: <HiOutlineAnnotation />,
  },

  // {
  //   key: "messages",
  //   label: "Messages",
  //   path: "/messages",
  //   icon: <HiOutlineAnnotation />,
  // },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  // {
  //   key: "settings",
  //   label: "Settings",
  //   path: "/settings",
  //   icon: <HiOutlineCog />,
  // },
  // {
  //   key: "support",
  //   label: "Help & Support",
  //   path: "/support",
  //   icon: <HiOutlineQuestionMarkCircle />,
  // },
];
