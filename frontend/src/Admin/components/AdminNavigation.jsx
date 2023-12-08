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
  //   {
  //     key: "profile",
  //     label: "Profile",
  //     path: "/profile",
  //     icon: <HiOutlineCube />,
  //   },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiOutlineShoppingCart />,
  },

  {
    key: "approve_vendor",
    label: "Approve Vendor",
    path: "/approve_vendor",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
