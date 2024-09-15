import React from "react";
import Layout from "@/Components/Layout/Layout";
import MainTitle from "@/Components/Shared/MainTitle";
import FilterOrders from "@/Components/Pages/Order/FilterOrders";
import HeadListAllOrder from "@/Components/Pages/Order/HeadListAllOrder";
import ListAllOrder from "@/Components/Pages/Order/ListAllOrder";
import dataOrder from "@/Components/Pages/Order/DataOrder";
import { usePage } from "@inertiajs/react";

const AllOrders = () => {
  const { auth, pendingAdmins } = usePage().props;
  const userRole = auth.user.role;

  return (
    <Layout userRole={userRole} pendingAdmins={pendingAdmins}>
      <MainTitle title="All Orders" description="Semua Orderan Ada disini" />
      <FilterOrders />
      <HeadListAllOrder />
      {dataOrder.map((order, index) => (
        <ListAllOrder key={order.id} data={order} index={index} />
      ))}
    </Layout>
  );
};

export default AllOrders;
