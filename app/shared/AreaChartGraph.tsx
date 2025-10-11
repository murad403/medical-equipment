"use client"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent,} from "@/components/ui/chart"
import chartData from "../data/chartData"
import { useState } from "react"

const chartConfig = {
} satisfies ChartConfig

const AreaChartGraph = () => {
  const [time, setTime] = useState<string>("2025");
  // console.log(time);
  return (
    <Card className="bg-normal rounded-lg  border border-hard">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-lg font-semibold">Income Ratio</CardTitle>
        <form>
          <select value={time} onChange={(e) =>setTime(e.target.value)} className="outline-none border-none text-[16px] font-medium *:bg-normal px-3">
            <option value="2025" defaultChecked>2025</option>
            <option value="2024" >2024</option>
            <option value="2023">2023</option>
            <option value="2022" >2022</option>
            <option value="2021" >2021</option>
          </select>
        </form>
      </CardHeader>

      <CardContent className="pt-0 px-0">
        <div className="md:h-[380px] lg:h-full">
          <ChartContainer config={chartConfig}>
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} horizontal={false} />
            <YAxis dataKey={"range"} tickLine={false} axisLine={false} tickMargin={10} tickFormatter={(value) =>`${value / 1000}k`} domain={[1000, 9000]}/>
            <XAxis dataKey="time" tickLine={{stroke: "#48B1DB", strokeWidth: 1}} tickSize={10} axisLine={false} tickMargin={8} />

            <ChartTooltip cursor={false} content={
              <ChartTooltipContent className="text-title" indicator="line" formatter={(value: any) => `${(value / 1000).toFixed(1)}k$`}/>}/>

            <Area dataKey="income" fill="#48B1DB" type="natural" fillOpacity={0.4} stroke="#48B1DB" strokeWidth={3}/>
          </AreaChart>
        </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default AreaChartGraph;