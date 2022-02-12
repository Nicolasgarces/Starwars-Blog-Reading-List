import React from "react";
import{Link} from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card position-relative mx-2" style={{ minWidth: "18rem" }}>
      <img
        src="https://todobiografias.net/wp-content/uploads/2019/03/luke-skywalker-300x172.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
        Gender: male
        </p>
        <p className="card-text">
        Hair-Color: blond
        </p>
        <p className="card-text">
        Eye-Color: blue
        </p>
        <Link type="button" className="btn btn-outline-primary" to={`/single/${props.id}`} >
          Learn more!
        </Link>
        <button type="button" className="btn btn-outline-warning  m-5">
          <i className="bi bi-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
