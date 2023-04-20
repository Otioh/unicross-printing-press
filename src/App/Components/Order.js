import React from 'react'
import TopMenu from './TopMenu'
import Footer from './Footer'
import {Switch} from '@mui/material';

function Order() {
  return (
    <>
      <TopMenu active={"Order"} />
      <section className="arrival_section">
        <div className="container">
          <div className="box" style={{ height: "800px" }}>
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
              <div className="col-md-12 ml-auto">
                <div className="heading_container remove_line_bt"></div>

                <div
                  className="field card"
                  style={{ padding: "20px", maxWidth: "500px" }}
                >
                  <h5>Complete Order Form</h5>
                  <form action="index.html">
                    <fieldset>
                      <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        name="name"
                      />
                      <input
                        type="text"
                        placeholder="Enter Your E-Mail"
                        name="email"
                      />
                      <input placeholder="Delivery Address" />
                      <input
                        type="tel"
                        placeholder="Enter Your Phone Number"
                        name="email"
                      />
                      <div style={{ display: "flex", width: "100%" }}>
                        <input
                          type="number"
                          placeholder="No. of Pages"
                          name="email"
                        />
                        <input
                          type="number"
                          placeholder="No. of Copies"
                          name="email"
                        />
                      </div>

                      <label>Request Design</label>
                      <Switch />
                   
                      <br />
                      <textarea placeholder="Comments & Further Instructions"></textarea>

                      <label className="badge bg-info">
                        Attach File (only .pdf, .jpg)
                      </label>
                      <input type="file" accept=".pdf, .jpg, .jpeg" />
                      <input type="submit" value="Submit" />
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Order