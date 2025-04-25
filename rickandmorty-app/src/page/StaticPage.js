import '../styles/StaticPage.css';

export default function StaticPage() {
  return (
    <div className="static-container">
      <h1>🌌 Nuestros personajes favoritos del multiverso</h1>
      <img
        className="main-banner"
        src="https://wallpapers.com/images/featured/imagenes-de-rick-and-morty-b3e2pq02sb2fuvy3.jpg"
        alt="Rick and Morty Banner"
      />
      <p>
        En el vasto universo de Rick and Morty, estos tres personajes han logrado capturar nuestros corazones
        con sus locuras, valentía y sarcasmo interdimensional. ¡Conócelos!
      </p>

      <div className="static-cards">
        <div className="static-card">
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
          <h4>Rick Sanchez</h4>
          <p>El genio alcohólico más irreverente del multiverso.</p>
        </div>
        <div className="static-card">
          <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty" />
          <h4>Morty Smith</h4>
          <p>El alma inocente atrapada en aventuras caóticas.</p>
        </div>
        <div className="static-card">
          <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" alt="Summer" />
          <h4>Summer Smith</h4>
          <p>Valiente, directa y cada vez más badass.</p>
        </div>
      </div>

      <footer className="static-footer">
        <p>© {new Date().getFullYear()} Rick and Morty Fan Page. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}