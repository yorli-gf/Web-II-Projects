import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard.js';
import '../styles/CharacterCard.css';
import '../styles/EpisodeDetail.css';

export default function EpisodeDetail() {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then(res => res.json())
      .then(data => {
        setEpisode(data);
        const selected = [...data.characters.slice(0, 2), ...data.characters.slice(-2)];
        Promise.all(selected.map(url => fetch(url).then(r => r.json())))
          .then(setCharacters);
      });
  }, [id]);

  if (!episode) return <div>Cargando...</div>;

  return (
    <div className="episode-detail">
      <h2>{episode.name}</h2>
      <p style={{ textAlign: 'center' }}>{episode.air_date}</p>
      <h3>Personajes</h3>
      <div className="character-grid">
        {characters.map(ch => <CharacterCard key={ch.id} character={ch} />)}
      </div>
    </div>
  );
}
