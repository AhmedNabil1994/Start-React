// libraries
import React from "react";
// css file
import style from "./info.module.css";

export default function Info() {
  return (
    <section className={style.info}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h2 className="h3">LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h2 className="h3">AROUND THE WEB</h2>
            <div className="icons">
              <i
                className={`${style.icon} mx-1 fa-brands fa-facebook fa-1x`}
              ></i>
              <i
                className={`${style.icon} mx-1 fa-brands fa-twitter fa-1x`}
              ></i>
              <i
                className={`${style.icon} mx-1 fa-brands fa-linkedin-in fa-1x`}
              ></i>
              <i className={`${style.icon} mx-1 fa-solid fa-globe fa-1x`}></i>
            </div>
          </div>
          <div className="col-md-4">
            <h2 className="h3">ABOUT FREELANCER</h2>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
