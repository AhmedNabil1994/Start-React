// libraries
import React, { useContext, useEffect } from "react";
// css file
import style from "./notFound.module.css";
// context
import { TitleContext } from "../../context/TitleContext";

export default function NotFound() {
  const { title, setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("404");
  }, []);

  return (
    <section style={{ marginTop: "106px" }} className={style.notFound}>
      <div className="container">
        <p className="h2 text-danger">page not found {title}</p>
      </div>
    </section>
  );
}
