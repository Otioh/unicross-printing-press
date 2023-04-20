import React, { useState } from 'react';


function SlideShow() {

const [current, setcurrent] = useState(0)


    const next=()=>{
        if(current===2){
         setcurrent(0);   
        }else{
          setcurrent(current + 1);  
        }

    }
    const back=()=>{
        if(current===0){
setcurrent(2)
        }else{
setcurrent(current - 1);
        }

    }
  return (
    <div>
      <section className="slider_section ">
        <div className="slider_bg_box">
          <img src={require("../Assets/images/slider-bg.jpg")} alt="" />
        </div>
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Print 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color:'white', padding:'7px' }}>
                        We receive printing orders from any part of Calabar and
                        we deliver printed materials right at your door post.
                        Enjoy best print and design quality, contact us in few
                        clicks for any of the following services
                      </p>
                      <div className="btn-box">
                        <a href="/#/order" className="btn1">
                          Print Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid
                        error repudiandae earum suscipit fugiat molestias,
                        veniam, vel architecto veritatis delectus repellat modi
                        impedit sequi.
                      </p>
                      <div className="btn-box">
                        <a href="/#" className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid
                        error repudiandae earum suscipit fugiat molestias,
                        veniam, vel architecto veritatis delectus repellat modi
                        impedit sequi.
                      </p>
                      <div className="btn-box">
                        <a href="/#" className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
      {/* <!-- end slider section --> */}
    </div>
  );
}

export default SlideShow