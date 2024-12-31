import React from "react";
import homeImg from "../../assets/avataaars.svg";
import style from "./home.module.css";

export default function Home() {
  return (
    <section className={`text-center py-5 ${style.bg}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="mb-5">
              <img src={homeImg} className={style.img} alt="home image" />
            </div>
          </div>
          <div className="col-12">
            <h1 className={style.title}>start Framework</h1>
          </div>
          <div className="col-12">
            <div className="my-3 d-flex justify-content-center align-items-center">
              <div className={`me-3 ${style.line}`}></div>
              <i className="fa fa-solid fa-star text-white"></i>
              <div className={`ms-3 ${style.line}`}></div>
            </div>
          </div>
          <div className="col-12">
            <p className="text-white">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
