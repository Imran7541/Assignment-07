import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const Stats = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("timeline")) || [];

        const callCount = stored.filter((i) => i.type === "Call").length;
        const textCount = stored.filter((i) => i.type === "Text").length;
        const videoCount = stored.filter((i) => i.type === "Video").length;

        const chartData = [
            { name: " Call", value: callCount, fill: "#0088FE" },
            { name: " Text", value: textCount, fill: "#00C49F" },
            { name: " Video ", value: videoCount, fill: "#FF8F42" },
        ];

        setData(chartData);
    }, []);

    return (
        <div className="px-4 sm:px-10 lg:px-20 py-10 sm:py-16 lg:py-20">

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold max-w-[90%] lg:max-w-[70%] mx-auto pb-6">
                Friendship Analytics
            </h1>

            <div className="max-w-[95%] sm:max-w-[85%] lg:max-w-[70%] mx-auto shadow-2xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

                <p className="text-sm sm:text-base font-semibold text-[#244D3F] pb-4 sm:pb-6">
                    By Interaction Type
                </p>

                <div className="flex justify-center">

                    <PieChart width={300} height={300} className="sm:hidden">
                        <Pie
                            data={data}
                            dataKey="value"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={5}
                            cornerRadius={10}
                            isAnimationActive={true}
                        />
                        <Legend />
                        <Tooltip />
                    </PieChart>

                    <PieChart width={400} height={400} className="hidden sm:block">
                        <Pie
                            data={data}
                            dataKey="value"
                            innerRadius={80}
                            outerRadius={120}
                            paddingAngle={5}
                            cornerRadius={10}
                            isAnimationActive={true}
                        />
                        <Legend />
                        <Tooltip />
                    </PieChart>

                </div>

            </div>

        </div>
    );
};

export default Stats;