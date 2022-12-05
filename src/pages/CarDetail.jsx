import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import "./pages.css";
import user from "../assets/img/user.png";
import Container from "react-bootstrap/Container";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        console.log(res);
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <section class="jumbotron" style={{ height: "200px" }}>
          <div class="container h-100"></div>
        </section>
      </div>
      <Filter disabled={true} isButton={false} />
      <Container>
        <div className="row">
          <div className="col-lg-7">
            <div className="card h-100">
              <div className="card-body">
                <br />
                <h5>Tentang Paket</h5>
                <p style={{ fontWeight: "bold" }}>Include</p>
                <ul style={{ fontSize: "14px" }}>
                  <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <p style={{ fontWeight: "bold" }}>Exclude</p>
                <ul style={{ fontSize: "14px" }}>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <p style={{ fontWeight: "bold" }}>Refund, Reschedule, Overtime</p>
                <ul style={{ fontSize: "14px" }}>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
            </div>
          </div>
          {Object.entries(car).length ? (
            <div className="col-lg-5">
              <div className="card h-100">
                <div className="card-body">
                  <img src={car.image} width={310} height={190} style={{ marginBottom: "40px", marginTop: "40px", marginLeft: "40px" }} />
                  <br />
                  <h6>{car.name}</h6>
                  <p>
                    <img src={user} alt="" />
                    &nbsp;
                    {car.category === "Medium" && "4 - 6 Orang"}
                    {car.category === "small" && "2 - 4 Orang"}
                    {car.category === "medium" && "4 - 6 Orang"}
                    {car.category === "large" && "6 - 8 Orang"}
                  </p>
                  <h5>Total Rp. &nbsp;&nbsp;&nbsp;&nbsp; {car.price}</h5>
                </div>
              </div>
            </div>
          ) : (
            <h1></h1>
          )}
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default CarDetail;
