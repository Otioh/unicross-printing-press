import React, { useState } from 'react'
import Footer from '../Components/Footer'
import AdminControl from './AdminControl'
import AdminLogin from './AdminLogin'

function Admin() {
  const [isLogin, setisLogin] = useState(true)
  return (
    <div>
      {/* <!-- inner page section --> */}
      <section class="inner_page_head">
        <div class="container_fuild">
          <div class="row">
            <div class="col-md-12">
              <div class="full">
                <h3>Admin Panel</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end inner page section -->
      <!-- product section --> */}
      <section className="product_section layout_padding">
        <div className="container">
          {isLogin ? <AdminControl /> : <AdminLogin setisLogin={setisLogin} />}
        </div>
      </section>
      {/* <!-- end product section --> */}
      <Footer />
    </div>
  );
}

export default Admin