import React from "react";
import { Header } from "../pages/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../pages/footer";

export const Mainlayout = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
