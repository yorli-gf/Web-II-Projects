import { useEffect, useState } from 'react';
import EpisodeCard from '../components/EpisodeCard.js';

export default function HomePage() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(res => res.json())
      .then(data => setEpisodes(data.results));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Todos los capítulos</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {episodes.map(ep => <EpisodeCard key={ep.id} episode={ep} />)}
      </div>
    </div>
  );
}