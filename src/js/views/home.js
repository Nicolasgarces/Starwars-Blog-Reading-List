import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.Characters);
	console.log(store.Vehicles);
	console.log(store.Planets);
	return (
    <div className="container">
      <h1 style={{ color: "red" }}>Characters</h1>
		<div className="d-inline-flex overflow-scroll">
		{store.Characters.map((character,i)=>{
			return(<Card className="c" key={i} name={character.name}  id={character.uid}/>)
			 } )}
		</div>
		<h1 style={{ color: "red" }}>Vehicles</h1>
		<div className="d-inline-flex overflow-scroll">
		{store.Vehicles.map((vehicle,i)=>{
			return(<Card key={i} name={vehicle.name} id={vehicle.uid}/>)
		})}
		</div>
		<h1 style={{ color: "red" }}>Planets</h1>
		<div className="d-inline-flex overflow-scroll">
		{store.Planets.map((planet,i)=>{
			return(<Card key={i} name={planet.name} id={planet.terrain}/>)
		})}
		</div>
	</div>
  );
};
