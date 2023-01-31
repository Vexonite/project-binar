import Nav from "react-bootstrap/Nav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import "./pages.css";
import { Link } from "react-router-dom";

const PayConfirm = () => {
  return (
    <div>
      <Navbar />
      <div>
        <section class="jumbotron" style={{ height: "200px" }}>
          <div class="container h-100"></div>
        </section>
      </div>
      <Container>
        <div className="row">
          <div className="col-lg-7">
            <div className="card h-100">
              <div className="card-body">
                <br />
                <h5>Selesaikan Pembayaran Sebelum</h5>
                <p>-</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card h-100">
              <div className="card-body">
                <br />
                <p style={{ marginBottom: "60px" }}>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                <button type="button" className="btn btn-payment" style={{ width: "490px", backgroundColor: "#5cb85f", borderRadius: "2px" }}>
                  <Link to="/konfirmasibayar" style={{ textDecoration: "none", color: "#fff" }}>
                    Bayar
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-lg-7">
            <div className="card h-100">
              <div className="card-body">
                <br />
                <h5>Lakukan Transfer Ke</h5>
                <p>-</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-lg-7">
            <div className="card h-100">
              <div className="card-body">
                <br />
                <h5>Instruksi Pembayaran</h5>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link" id="nav-ATM-tab" data-bs-toggle="tab" data-bs-target="#nav-ATM" type="button" role="tab" aria-controls="nav-ATM" aria-selected="true">
                      ATM BCA
                    </button>
                    <button class="nav-link" id="nav-MBCA-tab" data-bs-toggle="tab" data-bs-target="#nav-MBCA" type="button" role="tab" aria-controls="nav-MBCA" aria-selected="false">
                      M-BCA
                    </button>
                    <button class="nav-link" id="nav-BCAKlik-tab" data-bs-toggle="tab" data-bs-target="#nav-BCAKlik" type="button" role="tab" aria-controls="nav-BCAKlik" aria-selected="false">
                      BCA Klik
                    </button>
                    <button class="nav-link" id="nav-Ibanking-tab" data-bs-toggle="tab" data-bs-target="#nav-Ibanking" type="button" role="tab" aria-controls="nav-Ibanking" aria-selected="false">
                      Internet Banking
                    </button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent" style={{ marginTop: "20px", marginLeft: "20px" }}>
                  <div class="tab-pane fade show active" id="nav-ATM" role="tabpanel" aria-labelledby="nav-ATM-tab">
                    <li> Masukkan kartu ATM lalu PIN </li>
                    <li> Pilih Menu "Transaksi Lainnya"--"Transfer"--"Ke rek BCA Virtual Account</li>
                    <li>
                      Masukkan nomor BCA Virtual Account: 70020+Order ID
                      <br />
                      Contoh:
                      <br />
                      No. Peserta: 12345678, maka ditulis 7002012345678
                    </li>
                    <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                    <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                  </div>
                  <div class="tab-pane fade" id="nav-MBCA" role="tabpanel" aria-labelledby="nav-MBCA-tab">
                    ...
                  </div>
                  <div class="tab-pane fade" id="nav-BCAKlik" role="tabpanel" aria-labelledby="nav-BCAKlik-tab">
                    ...
                  </div>
                  <div class="tab-pane fade" id="nav-Ibanking" role="tabpanel" aria-labelledby="nav-Ibanking-tab">
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default PayConfirm;
