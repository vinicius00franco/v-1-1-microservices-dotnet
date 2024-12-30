import React, { useEffect, useState } from "react";
import { getRestaurantes } from "../../services/restauranteService/index";
import { Link } from "react-router-dom";
import { CreateItemModal } from "../Modal/CreateItem/index";

export const RestauranteList = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedRestauranteId, setSelectedRestauranteId] = useState(null);

  useEffect(() => {
    const fetchRestaurantes = async () => {
      try {
        const data = await getRestaurantes();
        setRestaurantes(data);
      } catch (err) {
        setError("Erro ao carregar a lista de restaurantes.");
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurantes();
  }, []);

  const openModal = (restauranteId) => {
    setSelectedRestauranteId(restauranteId);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  if (loading)
    return (
      <div className="container mt-5">
        <div className="alert alert-info">Carregando...</div>
      </div>
    );
  if (error)
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Restaurantes</h2>
        <Link to="/criar-restaurante" className="btn btn-success">
          Criar Novo Restaurante
        </Link>
      </div>

      {restaurantes.length > 0 ? (
        <div className="row">
          {restaurantes.map((restaurante) => (
            <div key={restaurante.id} className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{restaurante.nome}</h5>
                  <p className="card-text">
                    <strong>Endereço:</strong> {restaurante.endereco}
                  </p>
                  <p className="card-text">
                    <strong>Site:</strong>{" "}
                    <a
                      href={restaurante.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {restaurante.site}
                    </a>
                  </p>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => openModal(restaurante.id)}
                  >
                    Criar Item
                  </button>
                  <Link
                    to={`/restaurante/${restaurante.id}`}
                    className="btn btn-secondary"
                  >
                    Detalhes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning">Sem restaurantes cadastrados.</div>
      )}

      <CreateItemModal
        restauranteId={selectedRestauranteId}
        show={showModal}
        onClose={closeModal}
      />
    </div>
  );
};
