import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./components/Cart";
import { CartProvider } from "./pages/CartContext";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <ToastContainer position="top-right" />
          <Routes>
            <Route path="/contact" element={<Contact />} />

            <Route path="/about" element={<About />} />
            <Route path="/viewcart" element={<Cart />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
