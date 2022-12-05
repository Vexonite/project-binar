import * as React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="sewa">
      <div className="container sewa mt-5">
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title">Sewa Mobil di (Lokasimu) Sekarang!</h2>
            <p style={{ marginTop: "25px", color: "white", fontWeight: 640 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>{" "}
            <br />
            <br />
            <button type="button" className="btn btn-success" style={{ backgroundColor: "#5cb85f", borderRadius: "3px" }}>
              <Link to="/carimobil" style={{ textDecoration: "none", color: "#fff" }}>
                Mulai Sewa Mobil
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
