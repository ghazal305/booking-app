// src/layout/Layout.jsx

import React from "react";
import Sidebar from "../components/sidebar/SideBar";
import Header from "../components/header/Header";
import { useState } from "react";

const Layout = ({ children }) => {
const [isSidebarOpen, setIsSidebarOpen] = useState(true);

const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="p-4 bg-gray-50 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
