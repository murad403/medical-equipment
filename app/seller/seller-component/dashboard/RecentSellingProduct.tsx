"use client";
import { useGetEarningsQuery } from "@/app/redux/api/api";
import SellingProductList from "./SellingProductList";
import LoadingSpinner from "@/app/shared/LoadingSpinner";

const RecentSellingProduct = () => {
  const { data, isLoading } = useGetEarningsQuery(undefined);
  const products = data?.data;
  if(isLoading){
    return <LoadingSpinner></LoadingSpinner>
  }
  // console.log(products);
  return (
    <div>
      <h2 className="text-lg font-semibold text-title">Recent Selling Product</h2>
      <div className="overflow-x-auto md:mt-4 mt-3 rounded-lg border border-hard">
        <table className="table">
          <thead className="">
            <tr className="bg-hard text-[14px] text-white">
              <td>#SL</td>
              <td>Product Name</td>
              <td>Category</td>
              <td>Price</td>
              <td>Bid Price</td>
              <td>Time & Date</td>
            </tr>
          </thead>
          <tbody className="space-y-3">
            {
              products?.slice(0, 3)?.map((product: any, index: number) => <SellingProductList key={product?._id} index={index} product={product}></SellingProductList>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentSellingProduct;
