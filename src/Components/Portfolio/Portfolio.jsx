import React, { useState } from "react";
// css file
// child components
import Title from "../Title/Title";
import Card from "../Card/Card";
import img1 from "../../assets/Portfolio/poert1.png";
import img2 from "../../assets/Portfolio/port2.png";
import img3 from "../../assets/Portfolio/port3.png";
import PortfolioModal from "../PortfolioModal/PortfolioModal";
import Modal from "../Modal/Modal";

export default function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [currentIMage, setCurrentIMage] = useState(null);

  const handleCardClick = (image) => {
    setModalShow(true);
    setCurrentIMage(image);
  };
  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <section className="pt-5 pb-4">
      <Title title="portfolio component" color="#2c3e50" />
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <Card image={img1} num="1" onClick={() => handleCardClick(img1)} />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card image={img2} num="2" onClick={() => handleCardClick(img2)} />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card image={img3} num="3" onClick={() => handleCardClick(img3)} />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card image={img1} num="1" onClick={() => handleCardClick(img1)} />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card image={img2} num="2" onClick={() => handleCardClick(img2)} />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card image={img3} num="3" onClick={() => handleCardClick(img3)} />
          </div>
        </div>
      </div>
      {/* <PortfolioModal show={modalShow} /> */}
      <Modal show={modalShow} close={closeModal} image={currentIMage} />
    </section>
  );
}
