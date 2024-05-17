import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Homepage from "./pages/Home/Homepage";
import About from "./pages/About/About";
import Footer from "./components/Foot/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";

import Login from "./pages/Login_Signup/Login";
import Signup from "./pages/Login_Signup/Signup";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
