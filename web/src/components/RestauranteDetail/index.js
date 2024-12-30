import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getItensByRestaurante } from "../../services/itemService/index";
import { getRestauranteById } from "../../services/restauranteService/index";

export const RestauranteDetail = () => {
  const { id } = useParams();
  const [restaurante, setRestaurante] = useState(null);
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const restauranteData = await getRestauranteById(id);
        setRestaurante(restauranteData);
        const itensData = await getItensByRestaurante(id);
        setItens(itensData);

        console.log("restauranteData" + restauranteData + "/n");
        console.log("itensData" + itensData + "/n");
      } catch (err) {
        setError("Erro ao carregar dados do restaurante.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

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
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">{restaurante.nome}</h2>
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
          <Link
            to={`/restaurante/${id}/criar-item`}
            className="btn btn-primary"
          >
            Adicionar Novo Item
          </Link>
        </div>
      </div>

      <h3>Itens</h3>
      {itens.length > 0 ? (
        <ul className="list-group mb-4">
          {itens.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.nome}
              <span className="badge bg-secondary">
                R$ {item.preco.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert alert-warning">Sem itens cadastrados.</div>
      )}

      <Link to="/" className="btn btn-secondary">
        Voltar para Lista de Restaurantes
      </Link>
    </div>
  );
};
