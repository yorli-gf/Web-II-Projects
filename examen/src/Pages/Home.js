import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => setCategories(res.data.categories));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then((res) => {
          const sorted = [...res.data.meals].sort((a, b) =>
            sortOrder === "asc"
              ? a.strMeal.localeCompare(b.strMeal)
              : b.strMeal.localeCompare(a.strMeal)
          );
          setMeals(sorted);
        });
    }
  }, [selectedCategory, sortOrder]);

  const filteredMeals = meals.filter(meal =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <div className="hero">
        <img src="/hero.jpg" alt="Hero" />
        <div className="hero-text">
          <h1>Chefs Academy Secrets</h1>
          <p>🍳 New recipe for you to try out, let’s cook!</p>
        </div>
      </div>


      <div className="content-wrapper">

        <aside className="sidebar-categories">
          <h2>Categories</h2>
          <div className="category-list-vertical">
            {categories.map(cat => (
              <div
                key={cat.idCategory}
                className={`category-item-vertical ${selectedCategory === cat.strCategory ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.strCategory)}
              >
                <img src={cat.strCategoryThumb} alt={cat.strCategory} />
                <span>{cat.strCategory}</span>
              </div>
            ))}
          </div>
        </aside>


        <section className="main-recipes">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="sort-by">
              <label>Sort by</label>
              <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Name (A-Z)</option>
                <option value="desc">Name (Z-A)</option>
              </select>
            </div>
          </div>

          <div className="meal-grid">
            {filteredMeals.length > 0 ? (
              filteredMeals.map(meal => (
                <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal} className="meal-card">
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <p>{meal.strMeal}</p>
                </Link>
              ))
            ) : (
              <p style={{ padding: "1rem", color: "#facc15" }}>No results found</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}


