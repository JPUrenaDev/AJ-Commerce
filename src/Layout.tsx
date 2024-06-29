import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <NavBar />
      <div className="flex-grow mt-[300px] ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
