import React, { useState } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bckground">
      <Card style={{ width: "32rem", position: "relative" }}>
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "none",
            background: "transparent",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          <FaTimes />
        </button>

        <Row>
          <Col className="px-3 py-4 d-flex flex-column align-items-center">
            <h3 className="mb-4 text-center">Register</h3>
            <Form className="w-75">
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Masukkan username" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label>Alamat Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email" />
              </Form.Group>

              <Form.Group controlId="formBasicPhone" className="mt-3">
                <Form.Label>No Handphone</Form.Label>
                <Form.Control type="tel" placeholder="Masukkan no handphone" />
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

              <Form.Group
                controlId="formBasicConfirmPassword"
                className="mt-3 position-relative"
              >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                />
                <span
                  onClick={toggleConfirmPasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "38px",
                    cursor: "pointer",
                  }}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </Form.Group>

              <div className="text-center mt-2 mb-2">
                <p>
                  Sudah Punya Akun?{" "}
                  <Link
                    to="/login"
                    style={{ color: "gray", textDecoration: "none" }}
                  >
                    Klik Disini
                  </Link>
                </p>
                <Button className="button-form" type="submit">
                  Register
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default RegisterForm;