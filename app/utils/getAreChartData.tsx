"use client";
import { useGetEarningsQuery } from '../redux/api/api';
import getDateAndTime from './getDateAndTime';

type TChartData = {
    income: number;
    time: string;
    range: number;
}

const getAreChartData = () => {
    const { data } = useGetEarningsQuery(undefined);
    let chartData: TChartData[] = [];
    let range = 0;

    data?.data?.forEach((data: any) =>{
        chartData.push({income: data?.amount, time: getDateAndTime(data?.createdAt).time.split(" ")[0], range: range += 1000});
    })
    return chartData;
};

export default getAreChartData;