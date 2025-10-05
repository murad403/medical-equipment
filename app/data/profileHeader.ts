export type TProfileHeaderData = {
    pathName: string;
    title: string;
    description: string;
}

const profileHeaderData: TProfileHeaderData[] = [
    {
        pathName: "/profile",
        title: "My profile",
        description: "Update your profile and personal details."
    },
    {
        pathName: "/profile/history",
        title: "My Product History",
        description: "Manage Products"
    },
    {
        pathName: "/profile/order",
        title: "My Order Products",
        description: "Manage Order"
    },
    {
        pathName: "/profile/report",
        title: "My Report",
        description: "Manage Report"
    },
]
export default profileHeaderData;