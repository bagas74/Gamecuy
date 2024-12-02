import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import gameimg from "../assets/img/bg-rdr.jpg";
import gameimg1 from "../assets/img/bg-gow.jpg";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  const games = [
    {
      id: 1,
      title: "Red Dead Redemption 2",
      price: "$1000",
      description:
        "Game AAA dengan anggaran besar dan kualitas grafis yang luar biasa dan mengesankan.",
      image: gameimg,
    },
    {
      id: 2,
      title: "God Of War Ragnarok",
      price: "$1500",
      description:
        "Berpetualang bersama bapak botak kratos dan anaknya atreus di mitologi nordik.",
      image: gameimg1,
    },
  ];

  return (
    <>
      <div className="text-white ms-3 mb-4 mt-3">
        <h2>Wishlist Game</h2>
      </div>

      <div className="d-flex flex-wrap justify-content-left gap-2">
        {games.map((game) => (
          <Card key={game.id} className="cardhome">
            <Card.Img variant="top" src={game.image} />
            <Card.Body>
              <Card.Title style={{ color: "white", fontSize: "1.1rem" }}>
                {game.title}
              </Card.Title>
              <Card.Subtitle
                className="mb-2 mt-1"
                style={{ color: "white", fontSize: "0.7rem" }}
              >
                Price: {game.price}
              </Card.Subtitle>
              <Card.Text style={{ color: "white", fontSize: "0.8rem" }}>
                {game.description}{" "}
                <Card.Link
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={() => handleShow(game)}
                >
                  Selengkapnya
                </Card.Link>
              </Card.Text>
              <div className="justify-content-center text-center">
                <Button className="btn-cardw" variant="dark">
                  <FaShoppingCart
                    className="me-1 mb-1"
                    style={{ fontSize: "0.8rem" }}
                  />{" "}
                  Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="text-center w-100">
            {selectedGame?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedGame?.image}
            alt={selectedGame?.title}
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
          <h5 className="mt-3">Price: {selectedGame?.price}</h5>
          <p style={{ marginBottom: "-15px" }}>{selectedGame?.description}</p>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center mb-2">
          <Button variant="dark" style={{ width: "130px" }}>
            <FaShoppingCart className="me-1" /> Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
