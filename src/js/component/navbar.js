import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
        <nav className="navbar navbar-light bg-light mb-3">
          <div className="container">
          <Link to="/">
              <span className="navbar-brand mb-0 h1 ">
                <img src="https://img.icons8.com/ios/50/000000/star-wars.png " />
              </span>
          </Link>
          <div className=" dropdown ">
            <Link to="/demo">
              <button
                className="btn btn-primary dropdown-toggle "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorite
              </button>
              <ul
                className="dropdown-menu "
                aria-labelledby="dropdownMenuButton1"
              >
                <li>Empty</li>
              </ul>
            </Link>
          </div>
          </div>
        </nav>
  );
};
