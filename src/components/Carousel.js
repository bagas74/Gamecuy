import Carousel from "react-bootstrap/Carousel";
import background1 from "../assets/img/bg-gow.jpg";
import background2 from "../assets/img/bg-itt.jpg";
import background3 from "../assets/img/bg-rdr.jpg";

function Carou() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={background1} alt="First slide" />
        <Carousel.Caption>
          <h3>God of War Ragnarök</h3>
          <p>
            God of War Ragnarök adalah permainan laga petualangan yang <br />
            dikembangkan oleh Santa Monica Studio dan diterbitkan oleh <br />
            Sony Interactive Entertainment.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={background2} alt="First slide" />
        <Carousel.Caption>
          <h3 className="tittle">It Takes Two</h3>
          <p>
            It Takes Two adalah gim aksi-petualangan kooperatif tahun 2021 yang
            dikembangkan oleh Hazelight Studios dan diterbitkan oleh Electronic
            Arts. Game ini secara khusus dirancang untuk multipemain kooperatif
            layar terpisah , yang berarti game ini harus dimainkan dengan pemain
            lain melalui permainan lokal atau daring. Game ini menampilkan
            sejumlah besar mekanisme gim dari berbagai genre gim video.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={background3} alt="First slide" />
        <Carousel.Caption>
          <h3 className="tittle">Red Dead Redemption 2</h3>
          <p>
            Red Dead Redemption 2 adalah permainan video aksi-petualangan
            bertema barat yang dikembangkan dan diterbitkan oleh Rockstar Games.
            Berlatar di dunia terbuka yang terdiri dari lima wilayah Amerika,
            yang dapat dijelajahi pemain saat mereka melanjutkan cerita, dan
            dapat dimainkan melalui sudut pandang orang ketiga dan orang
            pertama.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carou;
