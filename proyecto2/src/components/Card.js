import { FaUser, FaBed, FaStar } from 'react-icons/fa';
import '../styles/Card.css';

export default function Card({ data }) {
  return (
    <div className="card">
      {data.superhost && <span className="superhost">Superhost</span>}
      <img src={data.image} alt={data.title} />
      <div className="card-body">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className="info">
          <span>${data.price}/night</span>
          <span><FaBed /> {data.beds} beds</span>
          <span><FaUser /> {data.guests} guests</span>
          <span><FaStar /> {data.rating}</span>
        </div>
      </div>
    </div>
  );
}
