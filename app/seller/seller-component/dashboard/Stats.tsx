import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

const Stats = ({ dashboardData }: { dashboardData: any }) => {
    // console.log(dashboardData);
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 justify-between items-center gap-5'>
            <div className='flex items-center md:gap-10 gap-3 bg-normal border border-hard md:p-4 p-2 rounded-lg text-title'>
                <HiOutlineClipboardDocumentCheck className='text-hard' size={50} />
                <div>
                    <p className='text-sm'>Total Product</p>
                    <h3 className='text-4xl font-semibold'>{dashboardData?.totalProduct || 0}</h3>
                </div>
            </div>
            <div className='flex items-center md:gap-10 gap-3 bg-normal border border-hard md:p-4 p-2 rounded-lg text-title'>
                <HiOutlineClipboardDocumentCheck className='text-hard' size={50} />
                <div>
                    <p className='text-sm'>Total Sold</p>
                    <h3 className='text-4xl font-semibold'>{dashboardData?.totalSold || 0}</h3>
                </div>
            </div>
            <div className='flex items-center md:gap-10 gap-3 bg-normal border border-hard md:p-4 p-2 rounded-lg text-title'>
                <HiOutlineClipboardDocumentCheck className='text-hard' size={50} />
                <div>
                    <p className='text-sm'>Total Revenue</p>
                    <h3 className='text-4xl font-semibold'>${dashboardData?.totalRevenue || 0}</h3>
                </div>
            </div>
            <div className='flex items-center md:gap-10 gap-3 bg-normal border border-hard md:p-4 p-2 rounded-lg text-title'>
                <HiOutlineClipboardDocumentCheck className='text-hard' size={50} />
                <div>
                    <p className='text-sm'>Withdraw Amount</p>
                    <h3 className='text-4xl font-semibold'>${dashboardData?.withdrawAmount || 0}</h3>
                </div>
            </div>
        </div>
    );
};

export default Stats;