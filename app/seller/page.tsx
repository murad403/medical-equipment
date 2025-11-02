"use client";
import Withdraw from './seller-component/dashboard/Withdraw';
import Stats from './seller-component/dashboard/Stats';
import PieChart from '../shared/PieChart';
import AreaChartGraph from '../shared/AreaChartGraph';
import RecentSellingProduct from './seller-component/dashboard/RecentSellingProduct';
import ProtectedRoute from '../hooks/ProtectedRoute';
import { useSellerDashboardQuery } from '../redux/api/api';

const page = () => {
    const {data, isLoading} = useSellerDashboardQuery(undefined);
    const dashboardData = data?.data;
    return (
        <ProtectedRoute>
            <div className='space-y-3 md:space-y-5'>
                <Withdraw dashboardData={dashboardData}></Withdraw>
                <Stats dashboardData={dashboardData}></Stats>

                {/* income ratio */}
                <div className='flex flex-col md:flex-row items-center md:gap-7 gap-4'>
                    <div className='md:w-2/3 w-full'>
                        <AreaChartGraph></AreaChartGraph>
                    </div>
                    <div className='md:w-1/3 w-full'>
                        <PieChart dashboardData={dashboardData}></PieChart>
                    </div>
                </div>
                <RecentSellingProduct></RecentSellingProduct>
            </div>
        </ProtectedRoute>
    );
};

export default page;