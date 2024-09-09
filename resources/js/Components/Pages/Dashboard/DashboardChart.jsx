import React, { useState, useEffect } from "react";
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import dataChart from "./DataChart";

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const DashboardChart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "Pemasukan",
                data: [],
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 0,
                fill: false,
                tension: 0.4,
            },
            {
                label: "Pengeluaran",
                data: [],
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 0,
                fill: false,
                tension: 0.4,
            },
        ],
    });

    useEffect(() => {
        const dates = dataChart.map((item) => item.date);
        const incomeData = dataChart.map((item) => item.income);
        const expenseData = dataChart.map((item) => item.expense);

        setChartData({
            labels: dates,
            datasets: [
                {
                    label: "Pemasukan",
                    data: incomeData,
                    borderColor: "rgba(75,192,192,1)",
                    borderWidth: 1,
                    fill: false,
                    tension: 0.3,
                },
                {
                    label: "Pengeluaran",
                    data: expenseData,
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    fill: false,
                    tension: 0.3,
                },
            ],
        });
    }, []);

    return (
        <div className="bg-white col-span-2 shadow-md p-4 rounded-lg border-[0.1px] border-black border-opacity-60">
            <h2 className="text-gray-700 text-md font-semibold">
                Data Pemasukan dan Pengeluaran
            </h2>
            {chartData &&
            chartData.datasets &&
            chartData.datasets.length > 0 ? (
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: "Tanggal",
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: "Jumlah (Rp)",
                                },
                                beginAtZero: true,
                            },
                        },
                    }}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DashboardChart;
