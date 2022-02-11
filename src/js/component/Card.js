import React from 'react'

const Card = (props) => {
  return (
    <div className="card position-relative" style={{width: "18rem"}}>
	<img src="..." className="card-img-top" alt="..."/>
	<div className="card-body">
	  <h5 className="card-title">{props.name}</h5>
	  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	  <button type="button" className="btn btn-outline-primary">Learn more!</button>
	  <button type="button" className="btn btn-outline-warning m-5"><i className="bi bi-heart"></i></button>
	</div>
  </div>
  )
}

export default Card;