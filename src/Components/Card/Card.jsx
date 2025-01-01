import React from "react";
// css file
import style from "./card.module.css";
// Bs components
import { Card as BsCard } from "react-bootstrap";

export default function Card({ image, num, onClick }) {
  return (
    <div className="col-md-6 col-lg-4">
      <BsCard className={style.card} onClick={onClick}>
        <BsCard.Img variant="top" src={image} alt={`image-${num}`} />
        <div className={style.icon}>
          <i className="fa-solid fa-plus fa-6x"></i>
        </div>
      </BsCard>
    </div>
  );
}
