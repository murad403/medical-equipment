import equipment from "../../../public/achievements/equipment.png";
import sales from "../../../public/achievements/sales.png";
import client from "../../../public/achievements/client.png";
import country from "../../../public/achievements/country.png";


type TAchievements = {
    id: number;
    icon: any;
    title: string;
    score: number;
}[]

const achievements: TAchievements = [
    {
        id: 1,
        icon: equipment,
        title: "Medical Equipment",
        score: 10000
    },
    {
        id: 2,
        icon: sales,
        title: "Total Sales",
        score: 120000
    },
    {
        id: 3,
        icon: client,
        title: "Verified Sellers",
        score: 10000
    },
    {
        id: 4,
        icon: country,
        title: "Countries Served",
        score: 10000
    },
]

export default achievements;