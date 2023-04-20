import React from 'react'

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="full">
                <div className="logo_footer">
                  <a href="/#">
                    <img
                      width="210"
                      src={require("../Assets/images/logo.png")}
                      alt="#"
                    />
                  </a>
                </div>
                <div className="information_f">
                  <p>
                    <strong>ADDRESS:</strong> 28 Ekpo Abasi Street, Calabar,
                    Nigeria
                  </p>
                  <p>
                    <strong>TELEPHONE:</strong> +234 913 414 1555
                  </p>
                  <p>
                    <strong>EMAIL:</strong> info@unicrossprintingpress.com.ng
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                          <li>
                            <a href="/#/">Home</a>
                          </li>
                          <li>
                            <a href="/#/about">About</a>
                          </li>
                          <li>
                            <a href="/#/products">Products</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Account</h3>
                        <ul>
                          <li>
                            <a href="/#">Account</a>
                          </li>
                          <li>
                            <a href="/#">Checkout</a>
                          </li>
                          <li>
                            <a href="/#">Login</a>
                          </li>
                          <li>
                            <a href="/#">Register</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="widget_menu">
                    <h3>Newsletter</h3>
                    <div className="information_f">
                      <p>
                        Subscribe by our newsletter and get update protidin.
                      </p>
                    </div>
                    <div className="form_sub">
                      <form>
                        <fieldset>
                          <div className="field">
                            <input
                              type="email"
                              placeholder="Enter Your Mail"
                              name="email"
                            />
                            <input type="submit" value="Subscribe" />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="cpy_">
        <p class="mx-auto">
          © 2023 All Rights Reserved By{" "}
          <a href="https://unicrossprintingpress.com.ng/">
            Unicross Printing Press
          </a>
         
        </p>
      </div>
    </div>
  );
}

export default Footer