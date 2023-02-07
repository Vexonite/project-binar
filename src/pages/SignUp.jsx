import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SignInImg from "../assets/img/signin.png";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Sign Up";
  }, []);

  return (
    <div className="signin">
      <div className="signin-body">
        <div className="signin-content">
          <div className="signin-logo">
            <svg
              width="100"
              height="34"
              viewBox="0 0 100 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="34" fill="#CFD4ED" />
            </svg>
          </div>
          <div className="signin-form">
            <h3>Sign Up</h3>
            <form>
              <label className="fw-bold">Name*</label>
              <input type="text" name="name" placeholder="Nama Lengkap" />
              <label className="fw-bold">Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Contoh: johndee@gmail.com"
              />
              <label className="fw-bold">Password*</label>
              <input
                type="password"
                name="password"
                placeholder="6+ karakter"
              />
              <button className="fw-bold" style={{ color: "white" }}>
                Sign Up
              </button>
            </form>
            <p>
              Already have an account? <Link to="/sign-in">Sign In here</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="signin-pic">
        <div>
          <h1>Binar Car Rental</h1>
          <img src={SignInImg} alt="signinpic" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
