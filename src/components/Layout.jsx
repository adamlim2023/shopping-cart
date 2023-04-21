import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full max-w-lg mx-auto overflow-hidden bg-[#F1F1F1] min-h-screen font-graphik text-[#4A5662]">
      <Outlet />
    </div>
  );
};

export default Layout;
