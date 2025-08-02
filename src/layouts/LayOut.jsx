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

  // Debug logging
  console.log("Layout component rendered, sidebar open:", isSidebarOpen);

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <Header />
        <SearComponent />

        <main className="p-4 bg-gray-50 flex-1 overflow-y-auto">
          <div
            className="debug-info"
            style={{ padding: "10px", background: "#f0f0f0", margin: "10px 0" }}
          >
            <strong>Debug:</strong> Layout Outlet should render here
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
