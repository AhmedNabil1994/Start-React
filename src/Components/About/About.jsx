// libraries
import React, { useContext, useEffect } from "react";
// css file
import style from "./about.module.css";
// child components
import Title from "../Title/Title";
// context
import { TitleContext } from "../../context/TitleContext";

export default function About() {
  const { title, setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("About");
  }, []);

  return (
    <section className={style.about} style={{ marginTop: "106px" }}>
      <Title title={`${title} component`} color="white" />
      <div className="container">
        <div className="row">
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
