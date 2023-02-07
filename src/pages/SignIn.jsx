import React from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignInImg from "../assets/img/signin.png";
import { notification } from "antd";
import APIAuth from "../apis/APIAuth";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Sign In";
  }, []);

  const navigate = useNavigate();
  const { search } = useLocation();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message,
      description,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await APIAuth.login(Object.fromEntries(formData));
      openNotificationWithIcon("success", "Login", "Successfully login");
      let returnTo = "/";
      const params = new URLSearchParams(search);
      const redirectTo = params.get("return_to");
      if (redirectTo) returnTo += `${redirectTo}`;
      setTimeout(() => {
        navigate(returnTo);
      }, 2000);
    } catch (error) {
      openNotificationWithIcon("error", "Login", "Login failed");
    }
  };

  return (
    <div>
      {contextHolder}
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
              <h3>Welcome Back!</h3>
              <form onSubmit={handleSubmit}>
                <label className="fw-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Contoh johndee@gmail.com"
                />
                <label className="fw-bold">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="6+ karakter"
                />
                <button className="fw-bold" style={{ color: "white" }}>
                  Sign In
                </button>
              </form>
              <p>
                Don’t have an account?{" "}
                <Link to="/sign-up">Sign Up for free</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="signin-pic">
          <div>
            <h1>Binar Car Rental</h1>
            <img src={SignInImg} alt="signin-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
