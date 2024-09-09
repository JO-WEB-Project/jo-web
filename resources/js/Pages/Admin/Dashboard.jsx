import React from "react";
import Layout from "@/Components/Layout/Layout";
import MainTitle from "@/Components/Shared/MainTitle";
import DashboardCard from "@/Components/Shared/DashboardCard";
import DashboardCardGender from "@/Components/Shared/DashboardCardGender";
import DashboardChart from "@/Components/Pages/Dashboard/DashboardChart";
import DashboardDoughnutChart from "@/Components/Pages/Dashboard/DashboardDoughnutChart";

const Dashboard = () => {
  const companyName = "Jasa Ospek gitu aja";
    return (
        <Layout>
            <div className="">
                <MainTitle
                    title="Dashboard"
                    description={"This is your dashboard 😁"}
                />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <DashboardCard title={"Total Pesanan"} point={"110"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total Antrean"} point={"110"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total Pesanan Diproses"} point={"110"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total Pesanan Dipending"} point={"110"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total Pesanan Ready"} point={"110"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total Pesanan Selesai"} point={"110"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total Pesanan Dibatalkan"} point={"110"} description={"hahaha"}></DashboardCard>
                  <DashboardCardGender title={"Total Pesanan (Gender)"} male={"110"} female={"50"} description={"hahaha"}></DashboardCardGender>
                  <DashboardCard title={"Total Pendapatan Kotor"} point={"Rp. 000"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total Pendapatan Bersih"} point={"Rp. 000"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total Sisa Pelunasan"} point={"Rp. 000"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total DP/Uang masuk"} point={"Rp. 000"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total Pengeluaran"} point={"Rp. 000"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total Pengeluaran (Produksi)"} point={"Rp. 000"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total Pengeluaran (Karyawan)"} point={"Rp. 000"} description={"hahaha"}></DashboardCard>
                  <DashboardCard title={"Total Karyawan"} point={"1000"} description={"hahaha"}></DashboardCard>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <DashboardChart></DashboardChart>
                    <DashboardDoughnutChart></DashboardDoughnutChart>
                    
                </div>
                
            </div>
        </Layout>
    );
};

export default Dashboard;



{
    /* <div className="bg-white shadow-md p-6 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">Pemasukan</h2>
                    <div className="h-64">
                        <p>Grafik Pemasukan</p>
                    </div>
                </div> */
}
