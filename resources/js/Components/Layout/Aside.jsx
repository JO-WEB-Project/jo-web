import React from 'react'
import AsideCategory from '../Partials/AsideCategory';
import AsideMenu from '../Partials/AsideMenu';
import { MdSpaceDashboard, MdOutlinePaid } from "react-icons/md";
import { HiMiniQueueList } from "react-icons/hi2";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { BsPersonWorkspace } from "react-icons/bs";
import { LuScrollText } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuCodesandbox } from "react-icons/lu";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { PiHourglassMediumDuotone } from "react-icons/pi";
import { IoStorefrontOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa6";
import { GoRows } from "react-icons/go";




const Aside = () => {
  return (
      <aside className="w-60 bg-white border-r border-gray-200 p-4 pt-0 px-4">
          <nav>
              <ul>
                  <AsideCategory>Menu</AsideCategory>
                  <AsideMenu
                      icon={<MdSpaceDashboard size={20} />}
                      menu={"Dashboard"}
                      path={"/admin/dashboard"}
                  />

                  <AsideCategory>Pesanan</AsideCategory>
                  <AsideMenu
                      icon={<LuScrollText size={20} />}
                      menu={"Semua Pesanan"}
                      path={"/admin/AllOrders"}
                  />
                  <AsideMenu
                      icon={<GoRows size={20} />}
                      menu={"Antrean"}
                      path={"/admin/dashboard"}
                  />
                  <AsideMenu
                      icon={<PiHourglassMediumDuotone size={20} />}
                      menu={"Pesanan Diproses"}
                      path={"/admin/dashboard"}
                  />
                  <AsideMenu
                      icon={<LiaMoneyBillWaveAltSolid size={20} />}
                      menu={"Menunggu Pelunasan"}
                      path={"/admin/dashboard"}
                  />
                  <AsideMenu
                      icon={<LuPackageCheck size={20} />}
                      menu={"Siap Diantar"}
                      path={"/admin/dashboard"}
                  />
                  <AsideMenu
                      icon={<IoCheckmarkDoneCircleSharp size={20} />}
                      menu={"Pesanan Selesai"}
                      path={"/admin/dashboard"}
                  />
                  <AsideMenu
                      icon={<MdCancel size={20} />}
                      menu={"Pesanan Dibatalkan"}
                      path={"/admin/dashboard"}
                  />

                  <AsideCategory>Manajemen</AsideCategory>
                  <AsideMenu
                      icon={<LuCodesandbox size={20} />}
                      menu={"Product"}
                      path={"/admin/dashboard"}
                  />
                  <AsideMenu
                      icon={<LiaFileInvoiceDollarSolid size={20} />}
                      menu={"Pengeluaran"}
                      path={"/admin/dashboard"}
                  />
                  <AsideMenu
                      icon={<BsPersonWorkspace size={20} />}
                      menu={"Karyawan"}
                      path={"/admin/dashboard"}
                  />
                  <AsideCategory>Settings</AsideCategory>
                  <AsideMenu
                      icon={<LuSettings size={20} />}
                      menu={"Pengaturan Akun"}
                      path={"/admin/dashboard"}
                  />
                  <AsideMenu
                      icon={<IoStorefrontOutline size={20} />}
                      menu={"Pengaturan Store"}
                      path={"/admin/dashboard"}
                  />
                  <AsideMenu
                      icon={<RiAdminLine size={20} />}
                      menu={"Pengelolaan Admin"}
                      path={"/admin/dashboard"}
                  />
              </ul>
          </nav>
      </aside>
  );
}

export default Aside
