import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Personajes = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleDetails = (index) => {
    navigate(`/detallepersonaje/${index}`);
  };

  const handleOnError = (event) => {
    event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  };

  // Estado para controlar el color de la estrella en cada tarjeta
  const [starColors, setStarColors] = useState(Array(store.users.length).fill('btn-outline-warning'));

  // Efecto para actualizar el color de la estrella cuando cambia la lista de favoritos
  useEffect(() => {
    const newStarColors = [...starColors];
    store.users.forEach((user, index) => {
      if (store.favorites.includes(user.name)) {
        newStarColors[index] = 'btn-success'; // Cambiar el color de la estrella a verde
      } else {
        newStarColors[index] = 'btn-outline-warning'; // Restablecer el color de la estrella
      }
    });
    setStarColors(newStarColors);
  }, [store.favorites]);

  const toggleFavorite = (index, name) => {
    if (store.favorites.includes(name)) {
      actions.removeFav(name);
    } else {
      actions.addFav(name, index);
    }
  };

  return (
    <div className="container-fluid bg-dark text-white d-flex flex-column">
      <h1 style={{ color: "white", textAlign: "left", margin: "60px" }}>Personajes</h1>
      <div className="row m-3">
        {store.users.map((item, index) => (
          <div key={index} className="card m-3 col-sm-4 col-md-3 col-lg-2">
            <div className="card bg-light h-100">
              <img
                className="card-img-top m-auto"
                src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                onError={handleOnError}
                style={{ width: "200px" }}
                alt="Card image cap"
              />
              <div>
                <div className="card-body">
                  <h5 className="card-title text-dark">{item.name}</h5>
                </div>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <button onClick={() => handleDetails(index)} className="btn btn-sm btn-outline-primary">Info!</button>
                  <button className={`btn ${starColors[index]}`} onClick={() => toggleFavorite(index, item.name)}>
                    <i className="fas fa-star"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};