import React, { useState } from 'react'
import SlideShow from './SlideShow'
import TopMenu from './TopMenu'
import Footer from './Footer'
import { PaystackButton } from "react-paystack";
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight, faAward, faBiking, faShippingFast}  from '@fortawesome/free-solid-svg-icons'


function Index() {
  const [name, setname] = useState('')
    const [email, setemail] = useState("");
      const [phone, setphone] = useState("");
        const [address, setaddress] = useState("");


      const componentProps = {
        email,
        amount: 1200 * 100,
        metadata: {
          name,
          phone,
        },
        publicKey: "pk_test_333a6d671ee3429b1b36e2aa2a8bf45eca7d3926",
        text: "Process",
        onclick:()=>{
    if (email === "" || name === "" || address === "") {
      alert("All Fields are required");
    }
        },
        onSuccess: (msg) => {
      
          axios
            .post("payments", )
            .then((response) => {
         
            });
         
        },
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
      };
  return (
    <>
      <div className="hero_area">
        <TopMenu active={"Home"} />
        <SlideShow />
      </div>

      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Why Print With Us</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <FontAwesomeIcon icon={faBiking}></FontAwesomeIcon>
                </div>
                <div className="detail-box">
                  <h5>Fast Delivery</h5>
                  <p>
                    We deliver printed materials in the shortest possible time
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon>
                </div>
                <div className="detail-box">
                  <h5>Free Shiping</h5>
                  <p>Get shipping for free, when you order bulk work</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                </div>
                <div className="detail-box">
                  <h5>Best Quality</h5>
                  <p>Quality print on quality materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="arrival_section">
        <div className="container">
          <div className="box" style={{ height: "450px" }}>
            <div className="arrival_bg_box">
              <img src={require("../Assets/images/arrival-bg.png")} alt="" />
            </div>
            <div
              className="row"
              style={{
                position: "absolute",
                zIndex: 50,
                top: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <div className="col-md-6 ml-auto">
                <div className="heading_container remove_line_bt">
                  <h2
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.2 )",
                      color: "white",
                      padding: "7px",
                      width: "100%",
                    }}
                  >
                    PRINT ANYTHING{" "}
                  </h2>
                  <h3
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.2 )",
                      color: "white",
                      padding: "7px",
                      width: "100%",
                    }}
                  >
                    & ANYWHERE
                  </h3>
                </div>
                <p
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.2 )",
                    color: "white",
                    padding: "7px",
                  }}
                >
                  We receive printing orders from any part of Calabar and we
                  deliver printed materials right at your door post. Enjoy best
                  print and design quality, contact us in few clicks for any of
                  the following services
                </p>
                <a href="/#/order">Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container">
                  <div className="options">
                    <a href="/#" className="option1">
                      Order Design
                    </a>
                    <a href="/#" className="option2">
                      Order Printing
                    </a>
                  </div>
                </div>
                <div className="img-box">
                  <img src={require("../Assets/images/p1.png")} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Postcards (A6)</h5>
                  <h6>NGN 750 per 1</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container">
                  <div className="options">
                    <a href="/#" className="option1">
                      Order Design
                    </a>
                    <a href="/#" className="option2">
                      Order Printing
                    </a>
                  </div>
                </div>
                <div className="img-box">
                  <img src={require("../Assets/images/p2.png")} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Two-sided Business Cards</h5>
                  <h6>NGN 900</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container">
                  <div className="options">
                    <a href="/#" className="option1">
                      Order Design
                    </a>
                    <a href="/#" className="option2">
                      Order Printing
                    </a>
                  </div>
                </div>
                <div className="img-box">
                  <img src={require("../Assets/images/p3.png")} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Roll Up Banners</h5>
                  <h6>NGN 30,680</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container">
                  <div className="options">
                    <a href="/#" className="option1">
                      Order Design
                    </a>
                    <a href="/#" className="option2">
                      Order Printing
                    </a>
                  </div>
                </div>
                <div className="img-box">
                  <img src={require("../Assets/images/p4.png")} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Landscape ID Cards</h5>
                  <h6>NGN 900</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container">
                  <div className="options">
                    <a href="/#" className="option1">
                      Order Design
                    </a>
                    <a href="/#" className="option2">
                      Order Printing
                    </a>
                  </div>
                </div>
                <div className="img-box">
                  <img src={require("../Assets/images/p5.png")} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Off White T-shirts</h5>
                  <h6>NGN 3,500</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container">
                  <div className="options">
                    <a href="/#" className="option1">
                      Order Design
                    </a>
                    <a href="/#" className="option2">
                      Order Printing
                    </a>
                  </div>
                </div>
                <div className="img-box">
                  <img src={require("../Assets/images/p6.png")} alt="" />
                </div>
                <div className="detail-box">
                  <h5>A4 Branded Paper Bags</h5>
                  <h6>NGN 58,000</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="/#/products">View All products</a>
          </div>
        </div>
      </section>

      <section className="subscribe_section">
        <div className="container-fuild">
          <div className="box">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="subscribe_form ">
                  <div className="heading_container heading_center">
                    <h3>Subscribe To Get Discount Offers</h3>
                  </div>
                  <p>We would notify you whenever we have discounted offers</p>
                  <form action="">
                    <input type="email" placeholder="Enter your email" />
                    <button>subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Customer's Testimonial</h2>
          </div>
          <div
            id="carouselExample3Controls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img
                          src={require("../Assets/images/client.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>Ben Chisom</h5>
                    <h6>Customer</h6>
                    <p>
                      Wonderful services with smart delivery team, I would
                      appreciate if the time of completing transactions can be
                      faster
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img
                          src={require("../Assets/images/client.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>Anna Trevor</h5>
                    <h6>Customer</h6>
                    <p>
                      Dignissimos reprehenderit repellendus nobis error
                      quibusdam? Atque animi sint unde quis reprehenderit, et,
                      perspiciatis, debitis totam est deserunt eius officiis
                      ipsum ducimus ad labore modi voluptatibus accusantium
                      sapiente nam! Quaerat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img
                          src={require("../Assets/images/client.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>Anna Trevor</h5>
                    <h6>Customer</h6>
                    <p>
                      Dignissimos reprehenderit repellendus nobis error
                      quibusdam? Atque animi sint unde quis reprehenderit, et,
                      perspiciatis, debitis totam est deserunt eius officiis
                      ipsum ducimus ad labore modi voluptatibus accusantium
                      sapiente nam! Quaerat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn_box">
              <a
                className="carousel-control-prev"
                href="/#/"
                role="button"
                data-slide="prev"
              >
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              </a>
              <a
                className="carousel-control-next"
                href="/#/"
                role="button"
                data-slide="next"
              >
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Index