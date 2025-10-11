import { SlEye } from "react-icons/sl";

const RecentSellingProduct = () => {
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
              <td>Actions</td>
            </tr>
          </thead>
          <tbody className="space-y-3">
            <tr className="border-b border-hard text-title">
              <th>1</th>
              <td>murad</td>
              <td>Control Specialist</td>
              <td>10</td>
              <td>Czech </td>
              <td>9/29/2020</td>
              <td className="pl-8">
                <button className="cursor-pointer">
                    <SlEye size={17}/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentSellingProduct;
