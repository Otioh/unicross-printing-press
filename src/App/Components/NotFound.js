import React from 'react'
import TopMenu from './TopMenu';
import Footer from './Footer';

function NotFound() {
  return (
    <>
      <TopMenu />
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'300px'}}>
   
          <h2>
            Resource Not Found
          </h2>
    
      </div>
      <Footer />
    </>
  );
}

export default NotFound