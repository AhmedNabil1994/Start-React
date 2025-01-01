// react hooks
import React, { useState } from "react";
// images
import img1 from "../../assets/Portfolio/poert1.png";
import img2 from "../../assets/Portfolio/port2.png";
import img3 from "../../assets/Portfolio/port3.png";

// child components
import Title from "../Title/Title";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

export default function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [currentIMage, setCurrentIMage] = useState(null);
  // to avoid duplication of code (dry concept)
  const cardsUniqueImages = [img1, img2, img3];
  const cardsAllImages = [...cardsUniqueImages, ...cardsUniqueImages];
  
  const handleCardClick = (image) => {
    setModalShow(true);
    setCurrentIMage(image);
  };
  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <section className="pt-5 pb-4" style={{ marginTop: "106px" }}>
      <Title title="portfolio component" color="#2c3e50" />
      <div className="container">
        <div className="row g-5">
          {cardsAllImages.map((cardImage, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <Card
                image={cardImage}
                num={idx + 1}
                onClick={() => handleCardClick(cardImage)}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal show={modalShow} close={closeModal} image={currentIMage} />
    </section>
  );
}
