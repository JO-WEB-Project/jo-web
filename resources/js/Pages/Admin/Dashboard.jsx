import React from "react";
import Layout from "@/Components/Layout/Layout";
import MainTitle from "@/Components/Shared/MainTitle";
import DashboardCard from "@/Components/Shared/DashboardCard";
import DashboardCardGender from "@/Components/Shared/DashboardCardGender";
import DashboardChart from "@/Components/Pages/Dashboard/DashboardChart";
import DashboardDoughnutChart from "@/Components/Pages/Dashboard/DashboardDoughnutChart";
import { usePage } from "@inertiajs/react"; // Import this to get current user info

const Dashboard = () => {
  const { auth } = usePage().props; // Get the logged-in user

  // Censoring data for Admins, showing it to Owners
  const censorData = (data) => (auth.user.role === "Admin" ? "****" : data);
  
  return (
    <Layout>
      <div className="">
        <MainTitle
          title="Dashboard"
          description={"This is your dashboard 😁"}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <DashboardCard title={"Total Pesanan"} point={censorData("110")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total Antrean"} point={censorData("110")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total Pesanan Diproses"} point={censorData("110")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total Pesanan Dipending"} point={censorData("110")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total Pesanan Ready"} point={censorData("110")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total Pesanan Selesai"} point={censorData("110")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total Pesanan Dibatalkan"} point={censorData("110")} description={"hahaha"}></DashboardCard>
          <DashboardCardGender title={"Total Pesanan (Gender)"} male={censorData("110")} female={censorData("50")} description={"hahaha"}></DashboardCardGender>
          <DashboardCard title={"Total Pendapatan Kotor"} point={censorData("Rp. 000")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total Pendapatan Bersih"} point={censorData("Rp. 000")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total Sisa Pelunasan"} point={censorData("Rp. 000")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total DP/Uang masuk"} point={censorData("Rp. 000")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total Pengeluaran"} point={censorData("Rp. 000")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total Pengeluaran (Produksi)"} point={censorData("Rp. 000")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total Pengeluaran (Karyawan)"} point={censorData("Rp. 000")} description={"hahaha"}></DashboardCard>
          <DashboardCard title={"Total Karyawan"} point={censorData("1000")} description={"hahaha"}></DashboardCard>
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
