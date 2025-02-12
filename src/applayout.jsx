import React from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main>
        <Header />
        <Outlet />
      </main>
      <footer className="footer">Made By Goutham</footer>
    </div>
  );
};

export default AppLayout;
