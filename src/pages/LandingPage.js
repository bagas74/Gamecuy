import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../assets/img/logo.png";
import Carousel from "../components/Carousel";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span className="text-white">GameCuy</span>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              className="text-white me-2"
              onClick={() => navigate("/Login")}
            >
              Login
            </Nav.Link>
            <Button
              className="button-daftar ms-3 bg-white text-black"
              onClick={() => navigate("/Register")}
            >
              Register
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Carousel />
    </>
  );
}

export default LandingPage;
