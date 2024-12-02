import React from "react";
import Gambar from "../../assets/img/logo.png";

function Dashboard() {
  return (
    <div className="dash">
      <div>
        <img src={Gambar} alt="Logo Gamecuy" />
      </div>
      <h1>Gamecuy</h1>
    </div>
  );
}

export default Dashboard;
