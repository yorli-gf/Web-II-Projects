import '../styles/EpisodeCard.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext.js';

export default function EpisodeCard({ episode }) {
  const { state, dispatch } = useAppContext();

  return (
    <div className="episode-card">
      <div className="episode-image">
        Imagen de episodio
      </div>
      <div className="episode-info">
        <h3>{episode.name}</h3>
        <p>{episode.episode}</p>
        <p><strong>Emitido el:</strong> {episode.air_date}</p>
        <Link to={`/episode/${episode.id}`}>Ver Detalle</Link>
        <div className="vote-buttons">
          <button onClick={() => dispatch({ type: 'TOGGLE_LIKE_EPISODE', id: episode.id, value: 1 })}>Like</button>
          <button onClick={() => dispatch({ type: 'TOGGLE_LIKE_EPISODE', id: episode.id, value: -1 })}>No Like</button>
        </div>
        <p>Votos: {state.likes[episode.id] || 0}</p>
      </div>
    </div>
  );
}
