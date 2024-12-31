// import React from "react";
// import img from "../../assets/Portfolio/poert1.png";
import style from "./modal.module.css";

export default function Modal({ show, close, image }) {
  console.log(image);

  return (
    show && (
      <section
        className={`bg-primary bg-opacity-25 ${style.modal}`}
        onClick={() => close()}
      >
        <div className="text-center">
          <img
            src={image}
            alt="image"
            className={style.img}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </section>
    )
  );
}
