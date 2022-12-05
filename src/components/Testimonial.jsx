import * as React from "react";
import Star from "../assets/img/Rate.png";
import Carousel from "react-bootstrap/Carousel";
import Cat1 from "../assets/img/KOCENG.jpg";
import Cat2 from "../assets/img/KOCENG2.jpg";
import Cat3 from "../assets/img/KOCENG3.PNG";
import Cat4 from "../assets/img/KOCENG4.jpg";

const Testimonial = () => {
  return (
    <section id="testimony">
      <div className="container d-flex justify-content-center" style={{ marginTop: "80px" }}>
        <div className="row text-center">
          <div className="col">
            <h2 className="fs-2">Testimonial</h2>
            <p className="fs-6">Berbagai review positif dari para pelanggan kami</p>
          </div>
          <Carousel>
            <Carousel.Item>
              <div className="card text-start" style={{ borderColor: "transparent", backgroundColor: "#F1F3FF" }}>
                <div className="card-body">
                  <img src={Cat1} alt="" style={{ width: "80px", height: "80px" }} />
                  <br />
                  <img src={Star} alt="" />
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit exercitationem corporis distinctio voluptates voluptatum officia. Facere quam quaerat ex accusamus, repellat velit neque dolorem quidem delectus
                    alias eos odio. Dicta!
                  </p>
                  <p>John Dee 32, Bromo</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card text-start" style={{ borderColor: "transparent", backgroundColor: "#F1F3FF" }}>
                <div className="card-body">
                  <img src={Cat2} alt="" style={{ width: "80px", height: "80px" }} />
                  <br />
                  <img src={Star} alt="" />
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit exercitationem corporis distinctio voluptates voluptatum officia. Facere quam quaerat ex accusamus, repellat velit neque dolorem quidem delectus
                    alias eos odio. Dicta!
                  </p>
                  <p>Dee John 23, Omrob</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card text-start" style={{ borderColor: "transparent", backgroundColor: "#F1F3FF" }}>
                <div className="card-body">
                  <img src={Cat3} alt="" style={{ width: "80px", height: "80px" }} />
                  <br />
                  <img src={Star} alt="" />
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit exercitationem corporis distinctio voluptates voluptatum officia. Facere quam quaerat ex accusamus, repellat velit neque dolorem quidem delectus
                    alias eos odio. Dicta!
                  </p>
                  <p>John John 33, Brobro</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card text-start" style={{ borderColor: "transparent", backgroundColor: "#F1F3FF" }}>
                <div className="card-body">
                  <img src={Cat4} alt="" style={{ width: "80px", height: "80px" }} />
                  <br />
                  <img src={Star} alt="" />
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit exercitationem corporis distinctio voluptates voluptatum officia. Facere quam quaerat ex accusamus, repellat velit neque dolorem quidem delectus
                    alias eos odio. Dicta!
                  </p>
                  <p>Dee Dee 22, Momo</p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
