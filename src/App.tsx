import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./page/Home";
import Product from "./page/Product";
import Register from "./page/Register";
import Login from "./page/Login";
import Notfound from "./page/Notfound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
