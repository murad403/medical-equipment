import { GrUserManager } from "react-icons/gr";
import { CiDeliveryTruck, CiMedicalCase } from "react-icons/ci";
import { MdOutlineCleaningServices } from "react-icons/md";

type TWhyChooseUs = {
    id: number;
    title: string;
    icon: any;
}

const whyChooseUs: TWhyChooseUs[] = [
    {
        id: 1,
        title: "Trusted by medical professionals",
        icon: GrUserManager
    },
    {
        id: 2,
        title: "Certified equipment only",
        icon: CiMedicalCase
    },
    {
        id: 3,
        title: "Fast and safe delivery",
        icon: CiDeliveryTruck
    },
    {
        id: 4,
        title: "Responsive customer service",
        icon: MdOutlineCleaningServices
    },
] 
export default whyChooseUs;