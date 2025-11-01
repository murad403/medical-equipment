"use client";
import { useGetEarningsQuery } from "@/app/redux/api/api";
import getDateAndTime from "@/app/utils/getDateAndTime";

const TransactionModal = ({id}: {id: string}) => {
    const { data } = useGetEarningsQuery(undefined);
    const payment = data?.data?.find((payment: any) => payment?._id === id);
    // console.log(payment);
    const {date} = getDateAndTime(payment?.createdAt);
    // console.log(date);
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white text-title border-2 border-hard">
                    <form method="dialog">
                        <button className="absolute right-0 top-0 text-white bg-red-500 px-2 cursor-pointer">✕</button>
                    </form>
                    <h3 className="font-bold text-lg md:text-xl text-center">Transaction Details</h3>
                    <div className="*:flex *:justify-between *:items-center *:py-3 *:border-b *:border-hard mt-3 md:mt-5">
                        <div>
                            <h3 className="text-lg">Transaction ID:</h3>
                            <p>{payment?.transaction_id}</p>
                        </div>
                        <div>
                            <h3 className="text-lg">User Name:</h3>
                            <p>{payment?.customerId?.name}</p>
                        </div>
                        <div>
                            <h3 className="text-lg">Address:</h3>
                            <p>{payment?.customerId?.address}</p>
                        </div>
                        <div>
                            <h3 className="text-lg">Date:</h3>
                            <p>{date}</p>
                        </div>
                        <div>
                            <h3 className="text-lg">Price:</h3>
                            <p>${payment?.amount}</p>
                        </div>
                        <div>
                            <h3 className="text-lg">Amount with 10% paid:</h3>
                            <p>${(payment?.amount * 1.1)}</p>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default TransactionModal;