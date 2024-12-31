import React from "react";
// css file
import style from "./title.module.css";

export default function Title({ title, color }) {
  return (
    <>
      <div className="col-12">
        <h1 className={style.title} style={{ color }}>
          {title}
        </h1>
      </div>
      <div className="col-12">
        <div className="my-3 d-flex justify-content-center align-items-center">
          <div
            className={`me-3 ${style.line}`}
            style={{ backgroundColor: color }}
          ></div>
          <i className="fa fa-solid fa-star" style={{ color }}></i>
          <div
            className={`ms-3 ${style.line}`}
            style={{ backgroundColor: color }}
          ></div>
        </div>
      </div>
    </>
  );
}
