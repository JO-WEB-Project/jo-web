import React from 'react'

const CompanyInformation = () => {
  return (
      <a href='/admin/dashboard' className="flex items-center">
          <img
              src="/Assets/Images/Logo.png"
              alt="Logo"
              className="w-8 h-8 mr-2"
          />
          <span className="text-xl tracking-tight font-bold">Jasa Ospek</span>
      </a>
  );
}

export default CompanyInformation
