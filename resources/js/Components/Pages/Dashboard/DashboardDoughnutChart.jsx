import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import dataFakultas from "./DataFakultas";

Chart.register(ArcElement, Tooltip, Legend);

const DashboardDoughnutChart = () => {
    const fakultasNames = dataFakultas.map((item) => item.fakultas);
    const orderCounts = dataFakultas.map((item) => item.orders);
    const colorLabels = dataFakultas.map((item) => item.color);

    const data = {
        labels: fakultasNames,
        datasets: [
            {
                label: "Jumlah Order",
                data: orderCounts,
                backgroundColor: colorLabels,
                borderColor: colorLabels.map((color) =>
                    color.replace("0.6", "1")
                ),
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "",
            },
        },
    };

    return (
        <div className="bg-white shadow-md p-4 rounded-lg border-[0.1px] border-black border-opacity-60">
            <h2 className="text-gray-700 text-md font-semibold">
                Data Jumlah Order Setiap Fakultas
            </h2>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DashboardDoughnutChart;
