import getDateAndTime from '@/app/utils/getDateAndTime';
import React from 'react';

const SellingProductList = ({product, index} : {product: any, index: number}) => {
    const createdAt = product?.createdAt;
    const {date, time} = getDateAndTime(createdAt);
    return (
        <tr className="border-b border-hard text-title">
            <th>{index + 1}</th>
            <td>{product?.productId?.title}</td>
            <td>{product?.productId?.category}</td>
            <td>${product?.productId?.price}</td>
            <td>${product?.bidId?.bidPrice}</td>
            <td>{date}, {time}</td>
        </tr>
    );
};

export default SellingProductList;