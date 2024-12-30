import React, { useState } from "react";
import { createRestaurante } from "../../services/restauranteService/index";
import { useNavigate } from "react-router-dom";

export const CreateRestaurante = () => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [site, setSite] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRestaurante({ nome, endereco, site });
      navigate("/");
    } catch (error) {
      alert("Erro ao criar restaurante. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Criar Restaurante</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome:</label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="Digite o nome do restaurante"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Endereço:</label>
          <input
            type="text"
            className="form-control"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
            placeholder="Digite o endereço"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Site:</label>
          <input
            type="url"
            className="form-control"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            required
            placeholder="Digite o URL do site"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Criar
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate(-1)}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};
