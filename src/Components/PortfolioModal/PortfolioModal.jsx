import React from "react";
// Bs component
import { Modal } from "react-bootstrap";
import img from "../../assets/Portfolio/poert1.png";

export default function PortfolioModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <img src={img} alt="image" className="w-100" />
      </Modal.Body>
    </Modal>
  );
}
