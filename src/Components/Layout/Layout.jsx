import React from "react";
// libraries
import { Outlet } from "react-router-dom";
// app components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Info />
      <Footer />
    </>
  );
}
