// libraries
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// css file
import style from "./errorPage.module.css";
// context
import { TitleContext } from "../../context/TitleContext";

export default function ErrorPage() {
  const { title,setTitle } = useContext(TitleContext);
  
  useEffect(() => {
    setTitle("404");
  }, []);

  return (
    <section className={style.error}>
      <div className="container">
        <p className="h2 text-danger">Unexpected Application Error {title}!</p>
      </div>
      <p className="text-white h3 mt-4">
        Go to
        <Link to={""} className={`ms-2 ${style.anchor}`}>
          <i className="fa fa-solid fa-home"></i> page
        </Link>
      </p>
    </section>
  );
}
