type TProfileMenuLinks = {
    path: string;
    route: string;
}
const profileMenuLinks: TProfileMenuLinks[] = [
    {
        path: "My Profile",
        route: "/profile"
    },
    {
        path: "My History",
        route: "/profile/history"
    },
    {
        path: "Order",
        route: "/profile/order"
    },
    {
        path: "Report",
        route: "/profile/report"
    },
]
export default profileMenuLinks;