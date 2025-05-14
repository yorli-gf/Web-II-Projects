import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/RecipeDetail.css";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);
  const [deletedIngredients, setDeletedIngredients] = useState([]);
  
  useEffect(() => {
    const deleted = JSON.parse(localStorage.getItem(`deleted-${id}`)) || [];
    setDeletedIngredients(deleted);
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setMeal(res.data.meals[0]));
  }, [id]);

  const handleDeleteIngredient = (ingredient) => {
    const updated = [...deletedIngredients, ingredient];
    setDeletedIngredients(updated);
    localStorage.setItem(`deleted-${id}`, JSON.stringify(updated));
  };

  if (!meal) return <p className="loading">Loading...</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (
      name &&
      name.trim() !== "" &&
      !deletedIngredients.includes(name)
    ) {
      ingredients.push(`${name} - ${measure}`);
    }
  }

  return (
    <div className="detail-container">
        <button className="back-button" onClick={() => navigate("/")}>
            ← Back to Home
        </button>
      <div className="detail-card">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h1>{meal.strMeal}</h1>
        <p className="category">Category: <span>{meal.strCategory}</span></p>

        <h2>Ingredients</h2>
        <ul className="ingredient-list">
          {ingredients.map((item, index) => {
            const [ingredient] = item.split(" - ");
            return (
              <li key={index}>
                <span>{item}</span>
                <button onClick={() => handleDeleteIngredient(ingredient)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>

        <h2>Instructions</h2>
        <p className="instructions">{meal.strInstructions}</p>

        <div className="links">
          {meal.strYoutube && (
            <a href={meal.strYoutube} target="_blank" rel="noreferrer">
              📺 Watch on YouTube
            </a>
          )}
          {meal.strSource && (
            <a href={meal.strSource} target="_blank" rel="noreferrer">
              🌐 View original source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

