import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Layout/header";

export const MainLayout = () => {
  return (
    <div className=" ">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
