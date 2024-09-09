import React from "react";
import Layout from "@/Components/Layout/Layout";
import MainTitle from "@/Components/Shared/MainTitle";
import FilterOrders from "@/Components/Pages/Order/FilterOrders";
import HeadListAllOrder from "@/Components/Pages/Order/HeadListAllOrder";
import ListAllOrder from "@/Components/Pages/Order/ListAllOrder";
import dataOrder from "@/Components/Pages/Order/DataOrder";
import { AiOutlineEdit } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { BsPrinter } from "react-icons/bs";
import { FaPrint } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const AllOrders = () => {
    return (
        <Layout>
            <MainTitle
                title="All Orders"
                description="Semua Orderan Ada disini"
            />
            <FilterOrders />
            <HeadListAllOrder />
            {dataOrder.map((order, index) => (
                <ListAllOrder key={order.id} data={order} index={index} />
            ))}

            
            
        </Layout>
    );
};

export default AllOrders;
