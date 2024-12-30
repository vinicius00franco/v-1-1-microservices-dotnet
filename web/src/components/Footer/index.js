// src/components/Footer.jsx
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <h5>RestauranteApp</h5>
            <p>Gerencie seus restaurantes e itens de forma eficiente.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} RestauranteApp. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
