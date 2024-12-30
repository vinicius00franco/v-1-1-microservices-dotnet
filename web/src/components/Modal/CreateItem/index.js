import React, { useState } from "react";
import { createItem } from "../../../services/itemService/index"; // Certifique-se de ajustar o caminho conforme necessário

export const CreateItemModal = ({ restauranteId, show, onClose }) => {
  const [itemData, setItemData] = useState({ nome: "", preco: "" });
  const [feedback, setFeedback] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!itemData.nome || !itemData.preco) {
      setFeedback("Preencha todos os campos!");
      return;
    }
    try {
      // Usa o serviço para criar o item
      await createItem(restauranteId, itemData);
      setFeedback("Item criado com sucesso!");
      setItemData({ nome: "", preco: "" });
    } catch (error) {
      setFeedback("Erro ao criar o item.");
    }
  };

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Criar Item</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">
                  Nome do Item
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  name="nome"
                  value={itemData.nome}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="preco" className="form-label">
                  Preço
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="preco"
                  name="preco"
                  value={itemData.preco}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {feedback && (
                <div
                  className={`alert ${
                    feedback.includes("sucesso")
                      ? "alert-success"
                      : "alert-danger"
                  }`}
                >
                  {feedback}
                </div>
              )}
              <button type="submit" className="btn btn-success">
                Salvar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
