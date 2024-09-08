import React from 'react'
import Notifications from '../Partials/Notifications';
import Avatar from '../Partials/Avatar';
import CompanyInformation from '../Partials/CompanyInformation';

const Header = () => {
  return (
      <header className="bg-white border-b border-gray-200 px-8 py-2 flex items-center justify-between">
          <CompanyInformation/>
          <div className="flex items-center">
              <Notifications />
              <Avatar />
          </div>
      </header>
  );
}

export default Header
