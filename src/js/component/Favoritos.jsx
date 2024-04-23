import React, {useContext} from "react";
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";


export const Favoritos = () => {

    const { store, setStore } = useContext(Context);
    const removeFromFavorites = (item) => {
        console.log('Remove from favorites:', item);
        const updatedFavorites = store.favorites.filter((fav) => fav.id !== item.id);
        setStore({ favorites: updatedFavorites });
    };
    return (
        <div>
            <div className="btn-group">
                <button 
                    type="button"
                    className="btn btn-dark dropdown-toggle m-3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Favorites  {store.favorites.length}
                </button>
                <ul className="lista dropdown-menu dropdown-menu-end">
                    {store.favorites.map((favorite) => (
                        <li key={favorite.id} className="dropdown-item">
                                {favorite.name} - {favorite.type}
                                <button
                                    className="btn ml-5"
                                    onClick={() => removeFromFavorites(favorite)}>
                                    <i class="fas fa-times-circle"></i>
                                </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
    
}