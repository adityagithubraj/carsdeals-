import "./App.css";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Home/Homepage";
import About from "./pages/About/About";
import Footer from "./components/Foot/Footer";
import Contact from "./pages/Contact/Contact";
import ProductsPage from "./pages/Product/ProductsPage.jsx";
import SingleProduct from "./pages/SingleProduct/SingleProduct.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/products/cars" element={<SingleProduct/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
