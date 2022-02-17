import React, { useContext, useState } from "react";//primero decimos que queremos utilizar el contexto en ponemos {useContext}
import "../../styles/home.css";
import Card from "../component/Card";
import { Context } from "../store/appContext"; //segundo decimos que queremos importar a context ponemos {Context}

export const Home = () => {
	const { store, actions } = useContext(Context); // utilizamos el contexto y extraemos a las propiedades store y actions.¡SE HACE SIEMPRE! (store es el objeto que contiene todos los datos)
	console.log(store.Characters); //aqui vemos en consola para saber si se visualiza el array para luego mapearlo
	console.log(store.Vehicles);
	console.log(store.Planets);
	console.log(store.Character);
	return (
	<div>
	<div className="container d-flex flex-column">
		<h1 style={{ color: "red" }}>Characters</h1>
    		<div className="wrapper">
				<div className="item d-flex justify-content-start col-10">
					{store.Characters.map((character,i)=>{
					return(<Card  key={i} name={character.name} id={character.uid} gender={character.gender} className="c"/>)
			 		} )}
				</div>
			</div>
	</div>

	<div className="container">		
		<h1 style={{ color: "red" }}>Vehicles</h1>
			<div className="wrapper">
				<div className="item d-flex justify-content-start col-10">
					{store.Vehicles.map((vehicle,i)=>{
					return(<Card key={i} name={vehicle.name} id={vehicle.uid}/>)
					})}
				</div>
			</div>
	</div>

	<div className="container">	
		<h1 style={{ color: "red" }}>Planets</h1>
			<div className="wrapper">
				<div className="item d-flex justify-content-start col-10">
					{store.Planets.map((planet,i)=>{
					return(<Card key={i} name={planet.name} id={planet.terrain}/>)
					})}
				</div>
			</div>
	</div>
</div>
  );
};
