import React, { useState } from 'react'

function TopMenu({active}) {
const [show, setShow]=  useState(false)
  return (
    <div>
      {/* <!-- header section strats --> */}
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <img
                width="250"
                src={require("../Assets/images/logo.png")}
                alt="#"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={()=>{
                setShow(!show)
              }}
              
            >
              <span className=""> </span>
            </button>
            <div style={show?{display:'block'}:{display:'none'}}
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li
                  className={active === "Home" ? "nav-item active" : "nav-item"}
                >
                  <a className="nav-link" href="/#/index">
                    Home
                  </a>
                </li>
                <li
                  className={
                    active === "Products" ? "nav-item active" : "nav-item"
                  }
                >
                  <a className="nav-link" href="/#/products">
                    Products
                  </a>
                </li>
                <li
                  className={
                    active === "Order" ? "nav-item active" : "nav-item"
                  }
                >
                  <a className="nav-link" href="/#/order">
                    Place Order
                  </a>
                </li>
                <li
                  className={
                    active === "About" ? "nav-item active" : "nav-item"
                  }
                >
                  <a className="nav-link" href="/#/about">
                    About
                  </a>
                </li>
                <li
                  className={
                    active === "Contact" ? "nav-item active" : "nav-item"
                  }
                >
                  <a className="nav-link" href="/#/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default TopMenu