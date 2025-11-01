"use client";
import { useGetCurrentUserBidsQuery, useSavePaymentMutation } from '@/app/redux/api/api';
import { useAppSelector } from '@/app/redux/hook';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

const page = () => {
    const [savePayment] = useSavePaymentMutation();
    const { user } = useAppSelector((state: any) => state?.user);
    const { data } = useGetCurrentUserBidsQuery(user?._id);
    const searchParams = useSearchParams();
    const session_id = searchParams.get("session_id");
    const bidId = searchParams.get("bid");
    const paymentSaved = useRef(false);
    const currentBid = data?.data?.find((bid: any) => bid?._id === bidId);
    // console.log(currentBid?.sellerId, session_id);

    useEffect(() => {
        const savedPaymentData = async() => {
            if (paymentSaved.current) return;
            const payment = {
                amount: currentBid?.bidPrice,
                bidId,
                productId: currentBid?.productId?._id,
                customerId: currentBid?.customerId?._id,
                sellerId: currentBid?.sellerId,
                status: "success",
                session_id
            }
            if (session_id && currentBid) {
                try {
                    await savePayment(payment).unwrap();
                    paymentSaved.current = true;
                } catch (error: any) {
                    console.log(error);
                }
            }
        }
        savedPaymentData();
    }, [session_id, currentBid])
    return (
        <div className='flex items-center justify-center w-full min-h-screen'>
            <div className='w-[40%] bg-normal p-7 md:p-14 rounded-lg text-center'>
                <h2 className='text-hard text-4xl'>Payment successfully!!!</h2>
                <Link href={"/"} className='text-title text-lg underline underline-offset-2'>Back to home</Link>
            </div>
        </div>
    );
};

export default page;