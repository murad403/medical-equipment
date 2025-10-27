"use client";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

type TParams = {
    page: number;
    setPage: any;
    totalAuctions: number;
    limit: number;
}

const AuctionPagination = ({ page, setPage, totalAuctions, limit }: TParams) => {
    const [total, setTotal] = React.useState(0);
    React.useEffect( () =>{
        if(totalAuctions){
            setTotal(totalAuctions)
        }
    }, [totalAuctions])
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }
    return (
        <div className='flex justify-end w-full'>
            <Stack spacing={3}>
                <Pagination count={Math.ceil(total / limit)} page={page} onChange={handlePageChange} shape="rounded" renderItem={(item: any) => (
                    <PaginationItem sx={{ backgroundColor: "#eef9fe" }} slots={{ previous: IoIosArrowRoundBack, next: IoIosArrowRoundForward }}
                        {...item} />)} />
            </Stack>
        </div>
    );
};

export default AuctionPagination;




