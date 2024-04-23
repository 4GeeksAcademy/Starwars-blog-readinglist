import React, {useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const DetailsCharacter = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const index = params.id;

    return (
        <div className="container-fluid bg-dark vh-100 d-flex align-items-center justify-content-center">
            <div className="card text-light bg-dark m-3" style={{width : "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(index) + 1}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{store.users[index].name}</h4>
                        <p className="card-text"><b>Height: </b>{store.users[index].height}</p>
                        <p className="card-text"><b>Mass: </b>{store.users[index].mass}</p>
                        <p className="card-text"><b>Hair color: </b>{store.users[index].hair_color}</p>
                        <p className="card-text"><b>Skin color: </b>{store.users[index].skin_color}</p>
                        <p className="card-text"><b>Eye color: </b>{store.users[index].eye_color}</p>
                        <p className="card-text"><b>Birth year: </b>{store.users[index].birth_year}</p>
                        <p className="card-text"><b>Mass: </b>{store.users[index].mass}</p>   
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}