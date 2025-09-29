import signIn from "../../../public/sellingSteps/signup.png";
import addProduct from "../../../public/sellingSteps/addproduct.png";
import chooseAuction from "../../../public/sellingSteps/chooseauction.png";
import selling from "../../../public/sellingSteps/selling.png";
import bids from "../../../public/sellingSteps/bids.png";
import getPaid from "../../../public/sellingSteps/getpaid.png";

type TSellingSteps = {
    id: number;
    icon: any;
    title: string;
}[]

const sellingSteps: TSellingSteps = [
    {
        id: 1,
        icon: signIn,
        title: "Sign Up & Verify"
    },
    {
        id: 2,
        icon: addProduct,
        title: "Add Product"
    },
    {
        id: 3,
        icon: chooseAuction,
        title: "Choose Auction"
    },
    {
        id: 4,
        icon: selling,
        title: "Start Selling"
    },
    {
        id: 5,
        icon: bids,
        title: "Bids Wins"
    },
    {
        id: 6,
        icon: getPaid,
        title: "Get Paid 10%"
    },
]

export default sellingSteps;