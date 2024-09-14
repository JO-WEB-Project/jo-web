import React from 'react';
import Layout from '@/Components/Layout/Layout';
import MainTitle from '@/Components/Shared/MainTitle';
import HeadListAdmin from '@/Components/Pages/AdminManagement/HeadListAdmin';
import ListAdmin from '@/Components/Pages/AdminManagement/ListAdmin';
const AdminMangement = () => {
  return (
    <Layout>
        <MainTitle title="Admin Management" description={"pengelolaan akun admin kamu ada disini!"}/>
        <HeadListAdmin/>
        
        <ListAdmin/>
      
    </Layout>
  )
}

export default AdminMangement
