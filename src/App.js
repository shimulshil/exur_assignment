import React from 'react';
import Products from './component/Product';
// import Footer from './component/Footer';
// import Header from './component/Header';

export default function App() {
  return (
    <div className="App">
      <h2 style={{textAlign: "center",fontSize: "30px"}}>PRODUKTER.DK</h2>
      {/* <Header></Header> */}
      <Products></Products>
      {/* <Footer></Footer> */}
    </div>
  );
  };


