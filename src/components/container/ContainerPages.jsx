import React from "react";
import { Outlet } from "react-router-dom";

function ContainerPages() {
  return (
    <div className="mt-10 w-[85%] absolute right-1 bg-red-300">
      <Outlet />
    </div>
  );
}

export default ContainerPages;
