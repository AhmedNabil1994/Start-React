import React from "react";
// css file
import style from "./about.module.css";
import Title from "../Title/Title";
// comonents

export default function About() {
  return (
    <section className={style.about}>
      <div className="container">
        <div className="row">
          <Title title="about component" />
          <div className="col-md-6">
            <div className={`p-sm-0 ${style.pdLeft}`}>
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`p-sm-0 ${style.pdRight}`}>
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
