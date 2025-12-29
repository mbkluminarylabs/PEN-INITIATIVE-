import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Donate from "./components/Donate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";
import  Contact  from "./components/Contact";

function App() {
  
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="donate" element={<Donate />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
