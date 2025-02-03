import React, { useEffect, useState } from "react";
import Navbar from "./assets/Navbar";
const Meal = () => {
  const [meal, setMeal] = useState([]);
  const [area, setArea] = useState("british");
  useEffect(() => {
    const fetcdDataFromAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      console.log(data);
      setMeal(data.meals);
    };
    fetcdDataFromAPI();
  }, [area]);

  return (
    <>
      <div
        className="mx-auto text-center  "
        style={{
          padding: "100px",
          margin: "auto",
          maxHeight: "0px",
          gap: "10px",
        }}
      >
        <button
          onClick={() => setArea("British")}
          type="button"
          className="btn btn-primary"
          style={{ margin: "10px" }}
        >
          British
        </button>
        <button
          onClick={() => setArea("Canadian")}
          type="button"
          className="btn btn-secondary"
          style={{ margin: "10px" }}
        >
          Canadian
        </button>
        <button
          onClick={() => setArea("American")}
          type="button"
          className="btn btn-success"
          style={{ margin: "10px" }}
        >
          American
        </button>
        <button
          onClick={() => setArea("Thai")}
          type="button"
          className="btn btn-danger"
          style={{ margin: "10px" }}
        >
          Thai
        </button>
        <button
          onClick={() => setArea("Indian")}
          type="button"
          className="btn btn-info"
          style={{ margin: "10px" }}
        >
          Indian
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          gap: "50px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {meal.map((data) => (
          <div key={data.idMeal}>
            <div>
              <img
                src={data.strMealThumb}
                alt="pic"
                style={{
                  width: "250px",
                  border: "2px solid",
                  borderRadius: "10px",
                  alignItems: "center",
                  margin: "50px",
                }}
              />
            </div>
            <h3>{data.strMeal}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal;
