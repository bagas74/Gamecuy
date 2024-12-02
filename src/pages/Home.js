import React, { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import gameimg from "../assets/img/bg-rdr.jpg";
import gameimg1 from "../assets/img/bg-gow.jpg";
import gameimg2 from "../assets/img/bg-tw3.jpg";
import gameimg3 from "../assets/img/bg-cbp.jpg";
import gameimg4 from "../assets/img/bg-gta.jpg";
import gameimg5 from "../assets/img/bg-bmw.jpg";
import gameimg6 from "../assets/img/bg-itt.jpg";
import gameimg7 from "../assets/img/bg-sv.jpg";
import BoxCategory from "../components/BoxCategory";

function Home({ onAddToWishlist }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  const games = [
    // ... List game Anda
    {
      id: 1,
      title: "Red Dead Redemption 2",
      price: "$1000",
      description: "Game AAA...",
      image: gameimg,
    },
    {
      id: 2,
      title: "The Witcher 3: Wild Hunt",
      price: "$800",
      description: "Petualangan epik...",
      image: gameimg2,
    },
    // Tambahkan game lainnya...
  ];

  const handleAddToWishlist = (game) => {
    onAddToWishlist(game); // Panggil fungsi untuk menambahkan ke Wishlist
  };

  return (
    <>
      <div>
        <BoxCategory />
      </div>

      <div className="text-white ms-3 mb-4">
        <h2>Trending Game</h2>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
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
              <div className="d-flex justify-content-center gap-2">
                <Button className="btn-card1" variant="dark">
                  <FaShoppingCart
                    className="me-1"
                    style={{ fontSize: "0.8rem" }}
                  />{" "}
                  Cart
                </Button>
                <Button
                  variant="dark"
                  className="btn-card2"
                  onClick={() => handleAddToWishlist(game)}
                >
                  <FaHeart className="me-1" style={{ fontSize: "0.8rem" }} />{" "}
                  Wishlist
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        {/* Modal Detail Game */}
      </Modal>
    </>
  );
}

export default Home;
