import React, { useState } from "react";
import { createItem } from "../../services/itemService/index";
import { useNavigate, useParams } from "react-router-dom";

export const CreateItem = () => {
  const { id } = useParams(); // id do restaurante
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const precoNumber = parseFloat(preco);

      if (isNaN(precoNumber) || precoNumber < 0) {
        alert("Preço inválido. Insira um número válido.");
        return;
      }

      await createItem(id, { nome, preco: precoNumber });
      navigate(`/restaurante/${id}`);
    } catch (error) {
      alert("Erro ao criar item. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Criar Item para Restaurante {id}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome do Item:</label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="Digite o nome do item"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Preço:</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
            placeholder="Digite o preço"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Criar Item
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
