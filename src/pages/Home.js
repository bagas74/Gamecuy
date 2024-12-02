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
        "Game AAA dengan anggaran besar dan kualitas grafis yang luar biasa...",
      image: gameimg,
    },
    {
      id: 2,
      title: "The Witcher 3: Wild Hunt",
      price: "$800",
      description:
        "Petualangan epik dengan cerita yang mendalam di dunia yang penuh misteri...",
      image: gameimg2,
    },
    {
      id: 3,
      title: "Cyberpunk 2077",
      price: "$40",
      description:
        "Game dunia terbuka dengan cerita yang penuh aksi di kota masa depan...",
      image: gameimg3,
    },
    {
      id: 4,
      title: "Grand Theft Auto V",
      price: "$54",
      description:
        "Aksi kriminal di dunia terbuka dengan berbagai mode permainan...",
      image: gameimg4,
    },
    {
      id: 5,
      title: "It Takes Two",
      price: "$30",
      description:
        "Aksi-petualangan yang gila dengan berbagai kesulitan di dunia fantasi... ",
      image: gameimg6,
    },
    {
      id: 6,
      title: "God Of War Ragnarok",
      price: "$50",
      description:
        "Berpetualang bersama bapak botak kratos dan anaknya atreus di mitologi nordik.",
      image: gameimg1,
    },
    {
      id: 7,
      title: "Black Myth Wukong",
      price: "$45",
      description:
        "Berpetualang sebagai Kera Sakti untuk mengungkap kebenaran yang dikaburkan...",
      image: gameimg5,
    },
    {
      id: 8,
      title: "Stardew Valley",
      price: "$18",
      description:
        "game simulasi kehidupan di pedesaan yang mengambil alih lahan pertanian...",
      image: gameimg7,
    },
    {
      id: 10,
      title: "Stardew Valley",
      price: "$18",
      description:
        "game simulasi kehidupan di pedesaan yang mengambil alih lahan pertanian...",
      image: gameimg7,
    },
    {
      id: 11,
      title: "Stardew Valley",
      price: "$18",
      description:
        "game simulasi kehidupan di pedesaan yang mengambil alih lahan pertanian...",
      image: gameimg7,
    },
  ];

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
                <Button variant="dark" className="btn-card2">
                  <FaHeart className="me-1" style={{ fontSize: "0.8rem" }} />{" "}
                  Wishlist
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
        <Modal.Footer className="border-0 d-flex justify-content-center gap-3 mb-2">
          <Button variant="dark" style={{ width: "130px" }}>
            <FaShoppingCart className="me-1" /> Cart
          </Button>
          <Button variant="dark" style={{ width: "130px" }}>
            <FaHeart className="me-1" /> Wishlist
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;

