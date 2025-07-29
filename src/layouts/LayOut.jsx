import React from "react";
import Sidebar from "../components/sidebar/SideBar";
import Header from "../components/header/Header";
import { useState } from "react";
import SearComponent from "../components/search/SearchComponent";
import Home from "../pages/home/Home";
import SearchPage from "../pages/search/SearchPage";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`transition-all duration-300 ml-${
          isSidebarOpen ? "64" : "16"
        }`}
      >
        <Header />
        <SearComponent />
        <main className="p-4 bg-gray-50 flex-1 overflow-y-auto">
          {children}
          <Home />
          
        </main>
      </div>
    </div>
  );
};

export default Layout;
