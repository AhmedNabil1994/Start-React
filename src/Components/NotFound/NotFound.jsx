import React from "react";
import style from "./notFound.module.css";
export default function NotFound() {
  return (
    <section style={{ marginTop: "106px" }} className={style.notFound}>
      <div className="container">
        <p className="h2 text-danger">page not found</p>
      </div>
    </section>
  );
}
