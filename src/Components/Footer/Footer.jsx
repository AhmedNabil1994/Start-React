// libraries
import React from "react";
// css file
import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`py-3 ${style.footer}`}>
      <div className="container">
        <p className="color">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
