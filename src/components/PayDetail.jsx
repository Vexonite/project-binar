import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PayDetail = (props) => {
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
    <div className="card position-relative top-100 start-50 translate-middle mt-1" style={{ width: "1000px" }}>
      <div className="card-body">
        <p className="card-title">
          <b>Detail Pesananmu</b>
        </p>
        <form action>
          <div className="row justify-content-center">
            <div className="col-2">
              <div className="form-group">
                <label htmlFor="namaMobil" className="form-label">
                  Nama Mobil
                  <p>{car.name}</p>
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="kategoriMobil" className="form-label">
                  Kategori
                  {car.category === "Medium" && "4 - 6 Orang"}
                  {car.category === "small" && "2 - 4 Orang"}
                  {car.category === "medium" && "4 - 6 Orang"}
                  {car.category === "large" && "6 - 8 Orang"}
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="hargaMobil" className="form-label">
                  Tanggal Mulai Sewa
                </label>
              </div>
            </div>
            <div className="col-2">
              <div className="form-group">
                <label htmlFor="statusMobil" className="form-label">
                  Tanggal Akhir Sewa
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PayDetail;
