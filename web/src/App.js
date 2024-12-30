import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar/index";
import { Footer } from "./components/Footer/index";

import { RestauranteList } from "./components/RestauranteList";
import { RestauranteDetail } from "./components/RestauranteDetail";
import { CreateRestaurante } from "./components/CreateRestaurante";
import { CreateItem } from "./components/CreateItem";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<RestauranteList />} />
            <Route path="/criar-restaurante" element={<CreateRestaurante />} />
            <Route path="/restaurante/:id" element={<RestauranteDetail />} />
            <Route
              path="/restaurante/:id/criar-item"
              element={<CreateItem />}
            />
            {/* <Route path="/sobre" element={<Sobre />} />{" "} */}
            {/* Rota para a página "Sobre" */}
            {/* Adicione outras rotas conforme necessário */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
