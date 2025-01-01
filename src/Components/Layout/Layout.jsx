// libraries
import React from "react";
import { Outlet } from "react-router-dom";
// child components
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
