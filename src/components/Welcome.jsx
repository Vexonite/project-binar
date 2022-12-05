import * as React from "react";
import { Link } from "react-router-dom";
import Car from "../assets/img/CAR.png";

const Welcome = (props) => {
  return (
    <div>
      <section id="welcome" className="jumbotron">
        <div className="container container-fluid">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="display-4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="lead">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              {props.isButtonShow ? (
                <div>
                  <button type="button" className="btn btn-success" style={{ backgroundColor: "#5cb85f", borderRadius: "3px" }}>
                    <Link to="/carimobil" style={{ textDecoration: "none", color: "#fff" }}>
                      Mulai Sewa Mobil
                    </Link>
                  </button>
                </div>
              ) : null}
            </div>
            <div className="col p-0 m-0 text-end">
              <img src={Car} alt="car" className="w-100 img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
