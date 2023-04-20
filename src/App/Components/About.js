import React from "react";
import TopMenu from "./TopMenu";
import Footer from "./Footer";

function About() {
  return (
    <>
      <TopMenu active={"About"} />

      <section class="inner_page_head">
        <div class="container_fuild">
          <div class="row">
            <div class="col-md-12">
              <div class="full">
                <h3>About us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end inner page section -->
      <!-- why section --> */}
      <section class="why_section layout_padding">
        <div class="container">
          <div class="row">
            <p>
              Unicross Printing Press is own by University of Cross River State
              also known as UNICROSS. It is a state-owned tertiary institution
              with four campuses spread across four Local Government Areas of
              the state. The University was formerly known as the Cross River
              University of Technology.
            </p>
            <p>
              We receive printing orders from any part of Calabar and we deliver
              printed materials right at your door post. Enjoy best print and
              design quality, contact us in few clicks for any of the following
              services
            </p>
          </div>
        </div>
      </section>
      {/* <!-- end why section -->
      <!-- arrival section --> */}
      <section className="arrival_section">
        <div className="container">
          <div className="box" style={{ height: "400px" }}>
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
                  <h2>PRINT ANYTHING & ANYWHERE</h2>
                </div>
                <p style={{ marginTop: "20px", marginBottom: "30px" }}>
                  We receive printing orders from any part of Calabar and we
                  deliver printed materials right at your door post. Enjoy best
                  print and design quality, contact us in few clicks for any of
                  the following services
                </p>
                <a href="/order">Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end arrival section --> */}
      <Footer />
    </>
  );
}

export default About;