"use client";
import React, { useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Plugin } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({dashboardData}: {dashboardData: any}) => {

  const chartRef = useRef<any>(null);
  const profit = dashboardData?.profit;
  const loss = dashboardData?.loss;

//   dynamic value--------------------------------
  const data = {
    datasets: [
      {
        data: [loss || 0, profit || 0],
        backgroundColor: ["#4BC0C0", "#36A2EB"]
      }
    ],
  };
//   console.log(data.datasets[0].backgroundColor);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Doughnut Chart",
      },
    },
  };

  const centerTextPlugin: Plugin = {
  id: "centerText",
  afterDraw: (chart) => {
    const { ctx, chartArea } = chart;
    const { width, height } = chartArea;
    ctx.save();

    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("P&L", width / 2, height / 2 - 10);

    ctx.font = "12px Arial";
    ctx.fillStyle = "#555";
    ctx.fillText(`Total profit growth of ${dashboardData?.totalProfitGrowth || 0}%`, width / 2, height / 2 + 15);

    const meta = chart.getDatasetMeta(0);
    const dataset = chart.data.datasets[0];
    const total = (dataset.data as number[]).reduce((a, b) => a + (b as number), 0);

    meta.data.forEach((element, index) => {
      const value = dataset.data[index] as number;
      const percentage = ((value / total) * 100).toFixed(0) + "%";

      const pos = element.tooltipPosition(true as any);
      ctx.font = "bold 14px Arial";
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.fillText(percentage, pos.x, pos.y - 10);
    });

    ctx.restore();
  }
};



  return (
    <div className="w-full bg-normal rounded-xl p-3 md:p-5 md:h-[480px] lg:h-full flex flex-col justify-between">
        <div className="flex items-center gap-10 text-title">
            <div className="flex gap-3 items-center">
                <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                <div>
                    <h3 className="text-[16px]">Total Sold</h3>
                    <h2 className="text-xl font-medium">{dashboardData?.totalSold || 0}</h2>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="w-2 h-2 bg-hard rounded-full"></div>
                <div>
                    <h3 className="text-[16px]">Active Product</h3>
                    <h2 className="text-xl font-medium">{dashboardData?.totalProduct || 0}</h2>
                </div>
            </div>
        </div>
      <Doughnut key={dashboardData?.totalProfitGrowth} ref={chartRef} data={data} options={options}  plugins={[centerTextPlugin]}/>
    </div>
  );
}

export default PieChart;