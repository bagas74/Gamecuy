import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gameimg from "../../assets/img/bg-rdr.jpg";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Dropdown,
  Modal,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import {
  FaBell,
  FaShoppingCart,
  FaUserCircle,
  FaBars,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

function TopNavbar({ toggleSidebar }) {
  const [searchText, setSearchText] = useState("");
  const [showCartModal, setShowCartModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  const navigate = useNavigate();

  const handleOpenCartModal = () => {
    setShowCartModal(true);
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const handleCheckout = () => {
    setShowCartModal(false); // Tutup modal keranjang
    setShowCheckoutModal(true); // Buka modal checkout
  };

  const handleCloseCheckoutModal = () => {
    setShowCheckoutModal(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="navdash px-3 d-flex justify-content-between"
      >
        <div className="d-flex align-items-center" style={{ gap: "10px" }}>
          <Button
            variant="outline-light"
            onClick={toggleSidebar}
            className="mr-2"
          >
            <FaBars />
          </Button>
          <Form
            className="d-flex align-items-center position-relative ms-3"
            style={{ width: "100%" }}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-2"
              style={{ flex: 1, paddingRight: "30px" }}
              value={searchText}
              onChange={handleSearchChange}
            />
            {searchText && (
              <FaTimes
                className="clear-icon"
                onClick={clearSearch}
                style={{
                  position: "absolute",
                  right: "58px",
                  cursor: "pointer",
                  color: "#000000",
                }}
              />
            )}
            <Button variant="outline-light" style={{ marginLeft: "8px" }}>
              <FaSearch />
            </Button>
          </Form>
        </div>
        <div className="d-flex align-items-center" style={{ gap: "15px" }}>
          <Button variant="link" className="text-white">
            <FaBell size={16} />
          </Button>
          <Button
            variant="link"
            className="text-white"
            onClick={handleOpenCartModal}
          >
            <FaShoppingCart size={16} />
          </Button>
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" className="text-white">
              <FaUserCircle size={24} />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ right: 0, left: "auto" }}>
              <Dropdown.Item href="#profile">Profile</Dropdown.Item>
              <Dropdown.Item href="#settings">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => navigate("/")}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>

      {/* Modal Keranjang */}
      <Modal
        show={showCartModal}
        onHide={handleCloseCartModal}
        centered
        dialogClassName="modal-lg"
        className="justify-content-center align-items-center"
      >
        <Modal.Header className="border-0 justify-content-center">
          <Modal.Title>Keranjang</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-chart d-flex align-items-center justify-content-center">
          <Row>
            <Col xs={4}>
              <div>
                <Image src={gameimg} rounded className="img-chart" />
              </div>
            </Col>
            <Col xs={8}>
              <h5>God Of War Ragnarok</h5>
              <p>
                Berpetualang bersama bapak botak kratos <br /> dan anaknya
                atreus di mitologi nordik.
              </p>
              <h6>Price: $1500</h6>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex justify-content-center gap-3">
          <Button
            variant="secondary"
            style={{ width: "100px" }}
            onClick={handleCloseCartModal}
            className="me-2"
          >
            Close
          </Button>
          <Button
            variant="dark"
            style={{ width: "100px" }}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Checkout */}
      <Modal
        show={showCheckoutModal}
        onHide={handleCloseCheckoutModal}
        centered
      >
        <Modal.Header className="border-0 justify-content-center">
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Proses checkout sedang berlangsung...</p>
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex justify-content-center">
          <Button variant="secondary" onClick={handleCloseCheckoutModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => alert("Payment Completed!")}>
            Complete Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TopNavbar;
