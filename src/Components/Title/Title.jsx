import React from "react";
// css file
import style from "./title.module.css";

export default function Title({ title }) {
  return (
    <>
      <div className="col-12">
        <h1 className={style.title}>{title}</h1>
      </div>
      <div className="col-12">
        <div className="my-3 d-flex justify-content-center align-items-center">
          <div className={`me-3 ${style.line}`}></div>
          <i className="fa fa-solid fa-star text-white"></i>
          <div className={`ms-3 ${style.line}`}></div>
        </div>
      </div>
    </>
  );
}
