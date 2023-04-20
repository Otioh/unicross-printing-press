import React from 'react'
import Footer from './Footer'
import TopMenu from './TopMenu'

function Products() {
  return (
    <div>
        <TopMenu active={"Products"}/>
         {/* <!-- inner page section --> */}
      <section class="inner_page_head">
         <div class="container_fuild">
            <div class="row">
               <div class="col-md-12">
                  <div class="full">
                     <h3>Product Grid</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- end inner page section -->
      <!-- product section --> */}
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
                  <img src={require("../Assets/images/p7.png")} alt="" />
                </div>
                <div className="detail-box">
                  <h5>A2 Posters</h5>
                  <h6>NGN 2,080</h6>
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
                  <img src={require("../Assets/images/p8.png")} alt="" />
                </div>
                <div className="detail-box">
                  <h5>A5 flyers (Single Sided)</h5>
                  <h6>NGN 6,500</h6>
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
                  <img src={require("../Assets/images/p9.png")} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Round Stickers (3.5" Diameter)</h5>
                  <h6>NGN 9,965</h6>
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
                  <img src={require("../Assets/images/p10.png")} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Simple Mugs</h5>
                  <h6>NGN 2,605</h6>
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
                  <img src={require("../Assets/images/p11.png")} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Trifold Brochures</h5>
                  <h6>NGN 27,500</h6>
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
                  <img src={require("../Assets/images/p12.png")} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Greeting Cards</h5>
                  <h6>NGN 27,000</h6>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </section>
      {/* <!-- end product section --> */}

      <Footer/>
    </div>
  )
}

export default Products