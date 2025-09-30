type TNavbarLinks = {
    id: number;
    path: string;
    route: string;
}[]

const navbarLinks: TNavbarLinks = [
    {
        id: 1,
        path: "Home",
        route: "/"
    },
    {
        id: 2,
        path: "Auctions",
        route: "/auctions"
    },
    {
        id: 3,
        path: "About Us",
        route: "/about"
    },
    {
        id: 4,
        path: "Contact",
        route: "/contact"
    },
    {
        id: 5,
        path: "Seller portal",
        route: "/seller-portal"
    }
]

export default navbarLinks;