"use client";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { IoIosArrowRoundBack, IoIosArrowRoundForward  } from "react-icons/io";
const AuctionPagination = () => {
    const [auctions, setAuctions] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [total, setTotal] = React.useState(20);
    const limit = 12;
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) =>{
        setPage(value);
    }
    // console.log(page);
    return (
        <div className='flex justify-end w-full'>
            <Stack spacing={3}>
                <Pagination count={Math.ceil(total / limit)} page={page} onChange={handlePageChange} shape="rounded"  renderItem={(item: any) => (
                    <PaginationItem sx={{backgroundColor: "#eef9fe"}} slots={{ previous: IoIosArrowRoundBack, next: IoIosArrowRoundForward }}
                    {...item}/>)}/>
            </Stack>
        </div>
    );
};

export default AuctionPagination;




