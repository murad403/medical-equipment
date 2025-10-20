import equipment from "../../public/category/equipment.png";
import devices from "../../public/category/devices.png";
import surgical from "../../public/category/surgical.png";
import patient from "../../public/category/patient.png";

type TProductCategories = {
    id: number;
    title: string;
    img: any;
}[]

const productCategories: TProductCategories = [
    {
        id: 1,
        title: "Diagnostic Equipment",
        img: equipment
    },
    {
        id: 2,
        title: "Imaging Devices",
        img: devices
    },
    {
        id: 3,
        title: "Surgical Instruments",
        img: surgical
    },
    {
        id: 4,
        title: "Patient Monitoring",
        img: patient
    },
]

export default productCategories;

