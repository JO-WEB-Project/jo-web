import React from 'react';
import Layout from '@/Components/Layout/Layout';
import MainTitle from '@/Components/Shared/MainTitle';
import HeadListAdmin from '@/Components/Pages/AdminManagement/HeadListAdmin';
import ListAdmin from '@/Components/Pages/AdminManagement/ListAdmin';
import { usePage } from "@inertiajs/react";

const AdminManagement = () => {
    const { auth, pendingAdmins, admins } = usePage().props;
    const userRole = auth.user.role;

    return (
        <Layout userRole={userRole} pendingAdmins={pendingAdmins}>
            <MainTitle
                title="Admin Management"
                description="Pengelolaan akun admin kamu ada di sini!"
            />
            <HeadListAdmin />
            {admins.map((admin, index) => (
                <ListAdmin key={admin.id} admin={admin} index={index + 1} />
            ))}
        </Layout>
    );
};

export default AdminManagement;
