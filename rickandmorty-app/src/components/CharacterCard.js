import '../styles/CharacterCard.css';
import { useAppContext } from '../context/AppContext.js';

export default function CharacterCard({ character }) {
  const { state, dispatch } = useAppContext();

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h4>{character.name}</h4>
      <p>{character.status} - {character.species}</p>
      <p><strong>Location:</strong> {character.location.name}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
      <button onClick={() => dispatch({ type: 'TOGGLE_LIKE_CHARACTER', id: character.id, value: 1 })}>Like</button>
      <p>Votos: {state.characterLikes[character.id] || 0}</p>
    </div>
  );
}