import React from "react";
import homeImg from "../../assets/Home/avataaars.svg";
import style from "./home.module.css";
import Title from "../Title/Title";

export default function Home() {
  return (
    <section
      className={`text-center py-5 ${style.bg}`}
      style={{ marginTop: "106px" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="mb-5">
              <img src={homeImg} className={style.img} alt="home image" />
            </div>
          </div>
          <Title title="start framework" color="white" />
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
