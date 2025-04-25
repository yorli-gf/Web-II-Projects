import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../page/HomePage.js';
import StaticPage from '../page/StaticPage.js';
import SearchPage from '../page/SearchPage.js';
import EpisodeDetail from '../page/EpisodeDetail.js';
import { AppProvider } from '../context/AppContext.js';
import '../styles/Menu.css';

export default function AppRouter() {
  return (
    <AppProvider>
      <Router>
        <nav>
          <Link to="/">Index</Link>
          <Link to="/static">Estatica</Link>
          <Link to="/search">Busqueda de Personaje</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/static" element={<StaticPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/episode/:id" element={<EpisodeDetail />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}