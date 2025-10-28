"use client";
import NavigateButton from "@/app/shared/NavigateButton";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import { useDeleteProductMutation, useGetSellerProductQuery } from "@/app/redux/api/api";
import LoadingSpinner from "@/app/shared/LoadingSpinner";
import Swal from "sweetalert2";
import Link from "next/link";

const page = () => {
    const { data, isLoading } = useGetSellerProductQuery(undefined);
    const [deleteProduct] = useDeleteProductMutation();
    const products = data?.data;
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    // console.log(products);
    const handleDeleteProduct = (id: string) => {
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
                    const result = await deleteProduct(id).unwrap();
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
        <ProtectedRoute>
            <div className="flex items-center gap-3">
                <NavigateButton text={"List of all products"}></NavigateButton>
                <h3 className="text-2xl font-bold text-hard">({products?.length})</h3>
            </div>
            <div className="mt-3 md:mt-5 space-y-2 md:space-y-3">
                {
                    products?.map((product: any) =>
                        <div key={product?._id} className="p-2 border border-hard rounded-lg text-title flex justify-between items-center" >
                            <div className="flex items-center gap-2">
                                <Image src={product?.images?.[0]?.image} alt={product?.title} className="w-16 h-14 rounded-lg" width={500} height={500}></Image>
                                <div className="space-y-1">
                                    <h2 className="text-xl md:text-2xl font-semibold">{product?.title}</h2>
                                    <h3 className="text-xl font-bold">${product?.price}</h3>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1">
                                <button onClick={() => handleDeleteProduct(product?._id)} className="cursor-pointer">
                                    <MdDeleteOutline size={20} />
                                </button>
                                <Link href={`/seller/product/product-list/${product?._id}`} className="bg-hard px-3 text-white rounded-2xl">Edit</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </ProtectedRoute>
    )
}

export default page;