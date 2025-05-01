import React, { useEffect, useState } from "react";
import "./../styles/Home.css";
import Card from "../components/Card";



const API_URL =
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json";

const HERO_IMAGE =
  "https://cdn.pixabay.com/photo/2019/07/15/08/32/australia-4338882_1280.jpg";

function Home() {
  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (!value.trim()) {
      setFiltered(properties);
    } else {
      const result = properties.filter((item) =>
        item.description.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(result);
    }
  };

  return (
    <>
      <div className="hero">
        <img src={HERO_IMAGE} alt="hero" />
        <div className="overlay">
          <h1>Book unique places to stay and things to do.</h1>
          <p>Unforgettable trips start with Airbnb.</p>
          <div className="search-wrapper">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search"
            />
          </div>
        </div>
      </div>

      <div className="grid">
        {filtered.map((prop, i) => (
          <Card key={i} data={prop} />
        ))}
      </div>
    </>
  );
}

export default Home;

