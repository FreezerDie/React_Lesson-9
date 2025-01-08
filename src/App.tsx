import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./assets/components/HomePage";
import { AboutPage } from "./assets/components/AboutPage";
import { ProductsPage } from "./assets/components/ProductsPage";

function App() {
  return (
    <>
      <nav>
        <ul className="menu-list">
          <NavLink className="menu-item" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink className="menu-item" to="/about">
            <li>About</li>
          </NavLink>

          <NavLink className="menu-item" to="/products">
            <li>Products</li>
          </NavLink>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
