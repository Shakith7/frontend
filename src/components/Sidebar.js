import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from '../icons/dashboard-inactive.svg';
import { ReactComponent as AnalyticsIcon } from '../icons/analytics-inactive.svg';
import { ReactComponent as ProductsIcon } from '../icons/products-active.svg';
//import logo image
import logo from '../icons/logo.png';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 white text-white flex flex-col">
      <div className="flex items-center justify-center h-20">
        <img src={logo} alt="Logo" className="h-12" />
      </div><br />
      <nav className="mt-10 flex flex-col">
        <Link to="/dashboard" className="flex decoration-8  text-black items-center p-1 hover:bg-[#F2EEFF] hover:text-[#764EE8] font-semibold">
          <DashboardIcon className="h-9 w-18 mr-2" />
          Dashboard
        </Link><br />
        <Link to="/analytics" className="flex text-black items-center p-1 hover:bg-[#F2EEFF] hover:text-[#764EE8] font-semibold">
          <AnalyticsIcon className="h-9 w-18 mr-2" />
          Analytics
        </Link><br />
        <Link to="/products" className="flex text-black items-center p-1 hover:bg-[#F2EEFF] hover:text-[#764EE8] font-semibold">
          <ProductsIcon className="h-9 w-18 mr-2" />
          Products
        </Link><br />
      </nav>

    </div>
  );
};

export default Sidebar;
