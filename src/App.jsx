import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products, Home } from "./view";
import Header from "./layout/header";
import Footer from "./layout/footer";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="*" element={<h1> Pàgina não existe </h1>} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
