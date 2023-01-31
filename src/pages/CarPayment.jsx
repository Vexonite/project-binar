import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PayDetail from "../components/PayDetail";
import Container from "react-bootstrap/Container";
import "./pages.css";
import user from "../assets/img/user.png";
import { Link } from "react-router-dom";

const CarPayment = () => {
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
      <PayDetail />
      <Container>
        <div className="row">
          <div className="col-lg-7">
            <div className="card h-100">
              <div className="card-body">
                <br />
                <h5>Pilih Bank Transfer</h5>
                <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card h-100">
              <div className="card-body">
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
                <p>Tentukan lama sewa Mobil (Max. 7 Hari)</p>
                <h5 style={{ fontWeight: "bold" }}>Biaya Lainnya</h5>
                <ul style={{ fontSize: "14px" }}>
                  <li>Pajak</li>
                  <li>Biaya makan Sopir</li>
                </ul>
                <h5 style={{ fontWeight: "bold" }}>Belum Termasuk</h5>
                <ul style={{ fontSize: "14px" }}>
                  <li>Bensin</li>
                  <li>Tol dan Parkir</li>
                </ul>

                <h5 style={{ marginBottom: "30px", marginTop: "100px" }}>Total Rp. &nbsp;&nbsp;&nbsp;&nbsp; {car.price}</h5>
                <button type="button" className="btn btn-payment" style={{ width: "490px", backgroundColor: "#5cb85f", borderRadius: "2px" }}>
                  <Link to="/konfirmasibayar" style={{ textDecoration: "none", color: "#fff" }}>
                    Bayar
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default CarPayment;
