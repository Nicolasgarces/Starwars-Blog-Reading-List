import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(store.Character);
  useEffect(() => {
    actions.getCharacter(params.theid);
  }, []);
  return (
    <div className="container">
      <div className=" row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <img
            src="https://todobiografias.net/wp-content/uploads/2019/03/luke-skywalker-300x172.jpg"
            className="card-img-top"
            alt="..."
          />
        </div>
        <div>
          <h1 className="text-center">{store.Character.properties?.name}</h1>
          <h6 className="text-center">
          {store.Character.description}
          </h6></div>
      </div>
      <hr style={{color: `red`}}/>
      <div className="row">
        <div className="col-2 text-center">
          <p style={{color: `red`}}>Name</p>
          <p style={{color: `red`}}>{store.Character.properties?.name}</p>
        </div>  
        <div className="col-2 text-center">
          <p style={{color: `red`}}>Birth Year</p>
          <p style={{color: `red`}}>{store.Character.properties?.birth_year}</p>
        </div> 
        <div className="col-2 text-center">
          <p style={{color: `red`}}>Gender</p>
          <p style={{color: `red`}}>{store.Character.properties?.gender}</p>
        </div> 
        <div className="col-2 text-center">
          <p style={{color: `red`}}>Height</p>
          <p style={{color: `red`}}>{store.Character.properties?.height}</p>
        </div> 
        <div className="col-2 text-center">
          <p style={{color: `red`}}>Skin Color</p>
          <p style={{color: `red`}}>{store.Character.properties?.skin_color}</p>
        </div> 
        <div className="col-2 text-center">
          <p style={{color: `red`}}>Eye Color</p>
          <p style={{color: `red`}}>{store.Character.properties?.eye_color}</p>
        </div> 
      </div>
      
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
