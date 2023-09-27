import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function Page4() {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src="https://logowik.com/content/uploads/images/smiling-face-with-smiling-eyes-emoji5836.logowik.com.webp"
        alt="Profile"
        style={{ cursor: "pointer", width: "150px" }}
        onClick={handleImageClick}
      />
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
        Smiley J Smile
      </h2>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
		style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>Warning! Do not click profile picture!</Modal.Body>
      </Modal>

    </div>
  );
}

export default Page4;
