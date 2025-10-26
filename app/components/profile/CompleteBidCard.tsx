import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import useGetDateAndTime from "@/app/hooks/useGetDateAndTime";
import Swal from "sweetalert2";
import { useRemoveBidMutation } from "@/app/redux/api/api";

const CompleteBidCard = ({ bid }: { bid: any }) => {
    const [removeBid] = useRemoveBidMutation();
    // console.log(bid);
    const { name: customerName, phoneNumber: customerPhoneNumber, email: customerEmail, address: customerLocation, photo: customerPhoto } = bid?.customerId;
    const { bidPrice, createdAt: bidDateAndTime, updatedAt: bidDeliveryDateAndTime, orderNumber, _id } = bid;
    const { title, price: productPrice, createdAt: productUploadedDateAndTime } = bid?.productId;
    const { name: sellerName, email: sellerEmail, phoneNumber: sellerPhoneNumber, address: sellerLocation, photo: sellerPhoto } = bid?.productId?.sellerId;

    const { date: bidDate, time: bidTime } = useGetDateAndTime(bidDateAndTime);
    const { date: productUploadedDate, time: productUploadedTime } = useGetDateAndTime(productUploadedDateAndTime);
    const { date: bidDeliveryDate, time: bidDeliveryTime } = useGetDateAndTime(bidDeliveryDateAndTime);
    const orderNumberFormatter = String(orderNumber).padStart(2, "0");

    const handleDeleteCard = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const result = await removeBid(_id).unwrap();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${result?.message}`,
                        icon: "success"
                    });
                } catch (error) {
                    Swal.fire("Error!", "Something went wrong!", "error");
                }
            }
        });
    }

    return (
        <div className="px-4 py-3 bg-normal rounded-xl text-title">
            <div className="flex justify-end">
                <button onClick={handleDeleteCard} className="cursor-pointer">
                    <RiDeleteBin6Line />
                </button>
            </div>
            <div className="flex flex-col md:flex-row gap-7 justify-between">
                <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4">
                        <Image className="w-[90px] h-[90px] rounded-full" width={500} height={500} src={customerPhoto} alt={customerName}></Image>
                        <h3 className="font-medium text-xl capitalize">{customerName}</h3>
                    </div>
                    <div className="*:flex *:justify-between *:items-center *:md:py-4 *:py-3 *:border-b-2 *:border-blue-200">
                        <div>
                            <h3 className="font-medium text-lg">Name</h3>
                            <p className="text-[15px]">{customerName}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Email</h3>
                            <p className="text-[15px]">{customerEmail}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Phone Number</h3>
                            <p className="text-[15px]">{customerPhoneNumber}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Product Name</h3>
                            <p className="text-[15px]">{title}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Bid Price</h3>
                            <p className="text-[15px]">${bidPrice}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Bid Time & Date</h3>
                            <p className="text-[15px]">{bidDate}, {bidTime}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Location</h3>
                            <p className="text-[15px]">{customerLocation}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Order Number</h3>
                            <p className="text-[15px]">{orderNumberFormatter}</p>
                        </div>
                        <div className="border-none">
                            <h3 className="font-medium text-lg">Delivery Method</h3>
                            <p className="text-[15px]">UPS</p>
                        </div>
                    </div>
                </div>


                {/* border line ---------------*/}
                <div className="w-[2px] bg-hard hidden md:block"></div>
                <div className="md:w-[2px] block md:hidden md:h-full bg-hard h-[2px]"></div>

                <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4">
                        <Image className="w-[90px] h-[90px] rounded-full" width={500} height={500} src={sellerPhoto} alt={sellerName}></Image>
                        <h3 className="font-medium text-xl capitalize">{sellerName}</h3>
                    </div>
                    <div className="*:flex *:justify-between *:items-center *:md:py-4 *:py-3 *:border-b-2 *:border-blue-200">
                        <div>
                            <h3 className="font-medium text-lg">Seller Name</h3>
                            <p className="text-[15px]">{sellerName}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Email</h3>
                            <p className="text-[15px]">{sellerEmail}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Phone Number</h3>
                            <p className="text-[15px]">{sellerPhoneNumber}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Product Price</h3>
                            <p className="text-[15px]">${productPrice}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Location</h3>
                            <p className="text-[15px]">{sellerLocation}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Uploaded Date</h3>
                            <p className="text-[15px]">{productUploadedDate}, {productUploadedTime}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Order Number</h3>
                            <p className="text-[15px]">{orderNumberFormatter}</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Delivery Date</h3>
                            <p className="text-[15px]">{bidDeliveryDate}, {bidDeliveryTime}</p>
                        </div>
                        <div className="border-none">
                            <h3 className="font-medium text-lg">Delivery Method</h3>
                            <p className="text-[15px]">UPS</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CompleteBidCard;