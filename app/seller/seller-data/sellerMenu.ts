import { MdDashboard, MdOutlineShoppingCart, MdProductionQuantityLimits } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { FaClipboardList } from "react-icons/fa";
import { PiUserList } from "react-icons/pi";

type TSellerMenu = {
   path: string;
   route: string;
   icon: any;
   product?: {
    path: string;
    route: string;
    icon: any;
   }[];
}
const sellerMenu: TSellerMenu[] = [
    {
        path: "Dashboard",
        route: "/seller",
        icon: MdDashboard
    },
    {
        path: "Product",
        route: "/seller/product",
        icon: MdProductionQuantityLimits,
        product: [
            {path: "Product List",route: "/seller/product/product-list", icon: FaClipboardList },
            {path: "Bidder List",route: "/seller/product/bidder-list", icon: PiUserList },
            {path: "Edit Product",route: "/seller/product/edit-product", icon: FiEdit}
        ]
    },
    {
        path: "Order",
        route: "/seller/order",
        icon: MdOutlineShoppingCart
    },
    {
        path: "Earnings",
        route: "/seller/earnings",
        icon: RiMoneyDollarCircleLine
    },
    {
        path: "Setting",
        route: "/seller/setting",
        icon: IoSettingsOutline
    }
]
export default sellerMenu;