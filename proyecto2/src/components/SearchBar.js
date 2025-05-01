import { useState } from 'react';
import '../styles/SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search"
      value={value}
      onChange={handleChange}
    />
  );
}
