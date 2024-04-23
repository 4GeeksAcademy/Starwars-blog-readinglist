import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const DetailsStarships = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const index = params.id;

    const handleOnError = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

    return (
        <div className="container-fluid bg-dark vh-100 d-flex align-items-center justify-content-center">
            <div className="card text-light bg-dark m-3" style={{ width: "540px;" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img onError={handleOnError} src={`https://starwars-visualguide.com/assets/img/starships/${parseInt(index) + 1}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{store.starships[index].name}</h4>
                            <p className="card-text"><b>Model: </b>{store.starships[index].model}</p>
                            <p className="card-text"><b>Manufacturer: </b>{store.starships[index].manufacturer}</p>
                            <p className="card-text"><b>Cost: </b>{store.starships[index].cost_in_credits}</p>
                            <p className="card-text"><b>Length: </b>{store.starships[index].length}</p>
                            <p className="card-text"><b>Max speed: </b>{store.starships[index].max_atmosphering_speed}</p>
                            <p className="card-text"><b>Crew: </b>{store.starships[index].crew}</p>
                            <p className="card-text"><b>Passengers: </b>{store.starships[index].passengers}</p>
                            <p className="card-text"><b>Cargo capacity: </b>{store.starships[index].cargo_capacity}</p>
                            <p className="card-text"><b>Consumables: </b>{store.starships[index].consumables}</p>
                            <p className="card-text"><b>Hyperdrive rating: </b>{store.starships[index].hyperdrive_rating}</p>
                            <p className="card-text"><b>MGLT: </b>{store.starships[index].MGLT}</p>
                            <p className="card-text"><b>Starship class: </b>{store.starships[index].starship_class}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}