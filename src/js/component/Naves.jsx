import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Naves = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleDetails = (index) => {
    navigate(`/detallenave/${index}`);
  };

  const handleOnError = (event) => {
    event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  };

  return (
    <div className="container-fluid bg-dark text-white d-flex flex-column">
      <h1 style={{ color: "white", textAlign: "left", margin: "60px" }}>Naves</h1>
      <div className="row m-3">
        {store.starships.map((item, index) => (
          <div key={index} className="card m-3 col-sm-4 col-md-3 col-lg-2" style={{ width: "18rem" }}>
            <div className="card bg-light h-100">
              <img
                className="card-img-top m-auto"
                src={`https://starwars-visualguide.com/assets/img/starships/${index + 1}.jpg`}
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
                  <button className={`btn ${store.favorites.includes(item.name) ? "btn-success" : "btn-outline-warning"}`} onClick={() => {
                    if (store.favorites.includes(item.name)) {
                      actions.removeFav(item.name);
                    } else {
                      actions.addFav(item.name, index);
                    }
                  }}>
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