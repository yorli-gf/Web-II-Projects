import { useState } from 'react';
import CharacterCard from '../components/CharacterCard.js';
import '../styles/CharacterCard.css';
import '../styles/SearchPage.css';

export default function SearchPage() {
  const [filters, setFilters] = useState({ name: '', status: '', species: '', type: '', gender: '' });
  const [results, setResults] = useState([]);

  const handleChange = e => setFilters({ ...filters, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const params = new URLSearchParams(filters).toString();
    fetch(`https://rickandmortyapi.com/api/character/?${params}`)
      .then(res => res.json())
      .then(data => setResults(data.results || []));
  };

  return (
    <div className="search-page">
      <form onSubmit={handleSubmit} className="search-form">
        <input name="name" placeholder="Name" onChange={handleChange} />
        <select name="status" onChange={handleChange}>
          <option value="">Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <input name="species" placeholder="Species" onChange={handleChange} />
        <input name="type" placeholder="Type" onChange={handleChange} />
        <select name="gender" onChange={handleChange}>
          <option value="">Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
      <div className="character-grid">
        {results.map(ch => <CharacterCard key={ch.id} character={ch} />)}
      </div>
    </div>
  );
}
