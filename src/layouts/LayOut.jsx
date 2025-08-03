import React from "react";
import Sidebar from "../components/sidebar/SideBar";
import Header from "../components/header/Header";
import { useState } from "react";
import SearComponent from "../components/search/SearchComponent";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header />
        <SearComponent />
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-60" : "ml-22"
        }`}
      >
        
        <main className="p-4 bg-gray-50 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
