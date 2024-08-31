import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage, AboutPage, ProductsPage, ContactPage } from "./pages/Pages";
import AppLayout from "./HOC/AppLayout";
import './App.css'

const App = () => {
  return (
    <Router>
      <AppLayout>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
