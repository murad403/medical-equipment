import product from "../../public/product.jpg";

export type TAuctions = {
    id: number;
    img: any;
    title: string;
    city: string;
    price: number;
    bids: number;
    time: string;
}
const auctions: TAuctions[] = [
    {
        id: 1,
        img: product,
        title: 'md murad islam',
        city: "Dhaka",
        price: 200,
        bids: 2,
        time: "2 hours ago"
    },
    {
        id: 2,
        img: product,
        title: 'md murad islam',
        city: "Dhaka",
        price: 200,
        bids: 2,
        time: "2 hours ago"
    },
    {
        id: 3,
        img: product,
        title: 'md murad islam',
        city: "Dhaka",
        price: 200,
        bids: 2,
        time: "2 hours ago"
    },
    {
        id: 4,
        img: product,
        title: 'md murad islam',
        city: "Dhaka",
        price: 200,
        bids: 2,
        time: "2 hours ago"
    },
    {
        id: 5,
        img: product,
        title: 'md murad islam',
        city: "Dhaka",
        price: 200,
        bids: 2,
        time: "2 hours ago"
    },
]

export default auctions;