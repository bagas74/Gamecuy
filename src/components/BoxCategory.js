import React from "react";
import Button from "react-bootstrap/Button";

function BoxCategory() {
  return (
    <div className="d-flex justify-content-center">
      <Button variant="outline-dark" className="boxcategor">
        Adventure
      </Button>
      <Button variant="outline-dark" className="boxcategor">
        Simulation
      </Button>
      <Button variant="outline-dark" className="boxcategor">
        Action
      </Button>
      <Button variant="outline-dark" className="boxcategor">
        Horor
      </Button>
    </div>
  );
}

export default BoxCategory;
