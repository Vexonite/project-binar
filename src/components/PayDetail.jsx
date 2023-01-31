import React, { useState } from "react";

const PayDetail = (props) => {
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
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="kategoriMobil" className="form-label">
                  Kategori
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
