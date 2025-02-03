import React, { useState } from "react";
import Meal from "../meal";

const Navbar = () => {
  const [inputData, setInputData] = useState(" ");
  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputData}`
    );
    const data = await api.json();
    console.log(data);
  };
  return (
    <>
      <nav className="navbar navbar fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <h2>
            {" "}
            <img src="logo.png" style={{ maxWidth: "50px" }}></img>
            FoodieMe
          </h2>{" "}
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#"></a>
            </li>
          </ul>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <input
              onChange={(e) => setInputData(e.target.value)}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
