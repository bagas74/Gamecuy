import React, { useState } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import herolog from "../assets/img/hero-log.png";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bckground">
      <Card style={{ width: "50rem" }}>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <FaTimes size={20} />
        </div>
        <Row className="gap">
          <Col
            md={7}
            className="px-3 py-4 d-flex flex-column align-items-center"
          >
            <h3 className="mb-4 text-center">Login</h3>
            <Form className="w-75">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Alamat Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email" />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                className="mt-3 position-relative"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "38px",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </Form.Group>

              <div className="text-center mt-2 mb-2">
                <p>
                  Belum punya akun?{" "}
                  <Link
                    to="/Register"
                    style={{ color: "gray", textDecoration: "none" }}
                  >
                    Klik Disini
                  </Link>
                </p>
                <Button
                  className="button-form"
                  type="submit"
                  onClick={() => navigate("/Dashboard")}
                >
                  Login
                </Button>
              </div>
            </Form>
          </Col>

          <Col
            md={5}
            className="d-flex justify-content-center align-items-center pe-5"
          >
            <img
              src={herolog}
              alt="Login illustration"
              style={{ width: "295px", height: "295px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default LoginForm;
