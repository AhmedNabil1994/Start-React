// libraries
import React, { useContext, useEffect, useState } from "react";
// images
import img1 from "../../assets/Portfolio/poert1.png";
import img2 from "../../assets/Portfolio/port2.png";
import img3 from "../../assets/Portfolio/port3.png";
// child components
import Title from "../Title/Title";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
// context
import { TitleContext } from "../../context/TitleContext";

export default function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [currentIMage, setCurrentIMage] = useState(null);
  // to avoid duplication of code (dry concept)
  const cardsUniqueImages = [img1, img2, img3];
  const cardsAllImages = [...cardsUniqueImages, ...cardsUniqueImages];
  const { title, setTitle } = useContext(TitleContext);

  const handleCardClick = (image) => {
    setModalShow(true);
    setCurrentIMage(image);
  };
  const closeModal = () => {
    setModalShow(false);
  };
  useEffect(() => {
    setTitle("Portfolio");
  }, []);

  return (
    <section className="pt-5 pb-4" style={{ marginTop: "106px" }}>
      <Title title={`${title} component`} color="#2c3e50" />
      <div className="container">
        <div className="row g-4">
          {cardsAllImages.map((cardImage, idx) => (
            <Card
              key={idx}
              image={cardImage}
              num={idx + 1}
              onClick={() => handleCardClick(cardImage)}
            />
          ))}
        </div>
      </div>
      <Modal show={modalShow} close={closeModal} image={currentIMage} />
    </section>
  );
}
