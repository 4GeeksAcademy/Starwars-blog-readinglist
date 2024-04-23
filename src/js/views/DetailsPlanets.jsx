import React, {useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const DetailsPLanets = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const index = params.id;

    const handleOnError = (event)=> {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      }

    return (
        <div className="container-fluid bg-dark vh-100 d-flex align-items-center justify-content-center">
            <div className="card text-light bg-dark m-3" style={{width : "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img onError={handleOnError} src={`https://starwars-visualguide.com/assets/img/planets/${parseInt(index) + 1}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{store.planets[index].name}</h4>
                        <p className="card-text"><b>Rotation: </b>{store.planets[index].rotation_period}</p>
                        <p className="card-text"><b>Orbita: </b>{store.planets[index].orbital_period}</p>
                        <p className="card-text"><b>Diameter: </b>{store.planets[index].diameter}</p>
                        <p className="card-text"><b>Climate: </b>{store.planets[index].climate}</p>
                        <p className="card-text"><b>Gravity: </b>{store.planets[index].gravity}</p>
                        <p className="card-text"><b>Terrain: </b>{store.planets[index].terrain}</p>
                        <p className="card-text"><b>Water Surface: </b>{store.planets[index].surface_water}</p>
                        <p className="card-text"><b>Population: </b>{store.planets[index].population}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}