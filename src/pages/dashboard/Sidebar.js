/* file kode Sidebar.js */
import React, { useState } from "react";
import { Nav, Modal, Button, Form } from "react-bootstrap";
import { FaHome, FaGift, FaStream, FaBookmark } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOpen }) {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div
      className="sidedash text-white d-flex flex-column"
      style={{
        width: isOpen ? "250px" : "0",
        overflow: "hidden",
        minHeight: "200vh",
        transition: "width 0.3s",
      }}
    >
      <div className="p-3 d-flex flex-column align-items-center">
        {isOpen && <h4>Gamecuy</h4>}
      </div>
      <Nav className="flex-column p-3" style={{ gap: "20px" }}>
        <Nav.Link
          as={Link}
          to="/Home"
          className={`menu-item text-white d-flex align-items-center ${
            location.pathname === "/Home" ? "active" : ""
          }`}
        >
          <FaHome size={20} className="mr-3" />
          {isOpen && <span className="ml-4">Home</span>}
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/Wishlist"
          className={`menu-item text-white d-flex align-items-center ${
            location.pathname === "/Wishlist" ? "active" : ""
          }`}
        >
          <FaBookmark size={20} className="mr-3" />
          {isOpen && <span className="ml-4">Wishlist</span>}
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/Library"
          className={`menu-item text-white d-flex align-items-center ${
            location.pathname === "/Library" ? "active" : ""
          }`}
        >
          <FaStream size={20} className="mr-3" />
          {isOpen && <span className="ml-4">Library</span>}
        </Nav.Link>

        <Nav.Link
          onClick={handleOpenModal}
          className="menu-item text-white d-flex align-items-center"
        >
          <FaGift size={20} className="mr-3" />
          {isOpen && <span className="ml-4">Redeem Game</span>}
        </Nav.Link>
      </Nav>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <div className="p-3">
          <h4 className="text-center">Redeem Game</h4>
        </div>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label className="text-black">
                Masukkan Kode Redeem:
              </Form.Label>
              <Form.Control type="text" placeholder="Kode Redeem" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <div className="p-4 border-0 d-flex justify-content-center gap-4">
          <Button
            variant="secondary"
            style={{ width: "100px" }}
            onClick={handleCloseModal}
          >
            Close
          </Button>
          <Button
            variant="dark"
            style={{ width: "100px" }}
            onClick={handleCloseModal}
          >
            Redeem
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Sidebar;
