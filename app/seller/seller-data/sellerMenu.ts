import { MdDashboard, MdOutlineShoppingCart, MdProductionQuantityLimits } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

type TSellerMenu = {
   path: string;
   route: string;
   icon: any;
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
        icon: MdProductionQuantityLimits
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