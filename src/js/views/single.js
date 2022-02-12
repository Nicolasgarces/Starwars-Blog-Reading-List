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
      <hr />
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
