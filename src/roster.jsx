import { useState, useEffect } from 'react';
import './Roster.css';

const players = [
  
  { number: 3,  name: 'KEVIN HARRELL',        team: 'TOP CLUB', position: 'GUARD',          pts: 18, reb: 6,  ast: 4 },
  { number: 5,  name: 'JAMES FLETCHER',       team: 'TOP CLUB', position: 'CENTER',         pts: 22, reb: 10, ast: 2 },
  { number: 14, name: 'JEFF MONTES',          team: 'TOP CLUB', position: 'FORWARD-GUARD',  pts: 10, reb: 4,  ast: 5 },
  { number: 27, name: 'BRYAN WARNER',         team: 'TOP CLUB', position: 'FORWARD-CENTER', pts: 30, reb: 12, ast: 3 },
  { number: 30, name: 'SCOTT DALE',           team: 'TOP CLUB', position: 'FORWARD',        pts: 18, reb: 7,  ast: 6 },
  { number: 37, name: 'NOAH JONES',           team: 'TOP CLUB', position: 'GUARD',          pts: 25, reb: 5,  ast: 7 },
  { number: 2,  name: 'MIGUEL ANGEL MONTOYA', team: 'TOP CLUB', position: 'GUARD',          pts: 12, reb: 3,  ast: 4 },
  { number: 23, name: 'CRISTIAN CAMILO SOTO', team: 'TOP CLUB', position: 'FORWARD',        pts: 28, reb: 9,  ast: 5 },
  { number: 23, name: 'CRISTIAN CAMILO RAMIREZ', team: 'TOP CLUB', position: 'FORWARD',     pts: 28, reb: 9,  ast: 5 },
  { number: 1,  name: 'ADAM RIVERS',           team: 'TOP CLUB', position: 'GUARD',           pts: 15, reb: 4,  ast: 6 },
  { number: 2,  name: 'BRIAN HUNTER',          team: 'TOP CLUB', position: 'FORWARD',         pts: 22, reb: 8,  ast: 3 },
  { number: 3,  name: 'CHARLES GREEN',         team: 'TOP CLUB', position: 'CENTER',          pts: 30, reb: 12, ast: 2 },
  { number: 4,  name: 'DANIEL MORRIS',         team: 'TOP CLUB', position: 'FORWARD-GUARD',   pts: 18, reb: 5,  ast: 7 },
  { number: 5,  name: 'ETHAN COLE',            team: 'TOP CLUB', position: 'FORWARD-CENTER',  pts: 25, reb: 9,  ast: 4 },
  { number: 51, name: 'ULISES MARTIN',         team: 'TOP CLUB', position: 'GUARD',           pts: 14, reb: 3,  ast: 5 },
  { number: 52, name: 'VICTOR HERRERA',        team: 'TOP CLUB', position: 'FORWARD',         pts: 21, reb: 8,  ast: 4 },
  { number: 53, name: 'WALTER LOPEZ',          team: 'TOP CLUB', position: 'CENTER',          pts: 29, reb: 13, ast: 2 },
  { number: 54, name: 'XAVIER RAMIREZ',        team: 'TOP CLUB', position: 'FORWARD-GUARD',   pts: 17, reb: 6,  ast: 7 },
  { number: 55, name: 'YURI GARCIA',           team: 'TOP CLUB', position: 'FORWARD-CENTER',  pts: 25, reb: 9,  ast: 5 },
  { number: 56, name: 'ZOE CASTILLO',          team: 'TOP CLUB', position: 'GUARD',           pts: 13, reb: 2,  ast: 6 },
  { number: 57, name: 'ALFREDO MENDEZ',        team: 'TOP CLUB', position: 'FORWARD',         pts: 28, reb: 10, ast: 3 },
  { number: 58, name: 'BENITO PEREZ',          team: 'TOP CLUB', position: 'CENTER',          pts: 20, reb: 12, ast: 1 },
  { number: 59, name: 'CARLOS DIAZ',           team: 'TOP CLUB', position: 'FORWARD-GUARD',   pts: 16, reb: 5,  ast: 8 },
  { number: 60, name: 'DIEGO RUIZ',            team: 'TOP CLUB', position: 'FORWARD-CENTER',  pts: 24, reb: 7,  ast: 4 },
  { number: 61, name: 'ENRIQUE TORRES',        team: 'TOP CLUB', position: 'GUARD',           pts: 12, reb: 3,  ast: 5 },
  { number: 62, name: 'FABIAN VEGA',           team: 'TOP CLUB', position: 'FORWARD',         pts: 22, reb: 9,  ast: 3 },
  { number: 63, name: 'GERARDO SANTOS',        team: 'TOP CLUB', position: 'CENTER',          pts: 30, reb: 14, ast: 2 },
  { number: 64, name: 'HERNAN MORENO',         team: 'TOP CLUB', position: 'FORWARD-GUARD',   pts: 15, reb: 6,  ast: 7 },
  { number: 65, name: 'IGNACIO JIMENEZ',       team: 'TOP CLUB', position: 'FORWARD-CENTER',  pts: 27, reb: 8,  ast: 5 },
  { number: 66, name: 'JORGE MARTINEZ',        team: 'TOP CLUB', position: 'GUARD',           pts: 14, reb: 4,  ast: 6 },
  { number: 67, name: 'KARIM CASTRO',          team: 'TOP CLUB', position: 'FORWARD',         pts: 23, reb: 10, ast: 3 },
  { number: 68, name: 'LUIS RAMOS',            team: 'TOP CLUB', position: 'CENTER',          pts: 28, reb: 12, ast: 2 },
  { number: 69, name: 'MANUEL CRUZ',           team: 'TOP CLUB', position: 'FORWARD-GUARD',   pts: 17, reb: 5,  ast: 8 },
  { number: 70, name: 'NELSON PENA',           team: 'TOP CLUB', position: 'FORWARD-CENTER',  pts: 25, reb: 9,  ast: 4 },
  { number: 71, name: 'OSVALDO VEGA',          team: 'TOP CLUB', position: 'GUARD',           pts: 13, reb: 3,  ast: 5 },
  { number: 72, name: 'PABLO LOPEZ',           team: 'TOP CLUB', position: 'FORWARD',         pts: 21, reb: 8,  ast: 3 },
  { number: 73, name: 'RAUL DIAZ',             team: 'TOP CLUB', position: 'CENTER',          pts: 29, reb: 13, ast: 2 },
  { number: 74, name: 'SALVADOR RUIZ',         team: 'TOP CLUB', position: 'FORWARD-GUARD',   pts: 16, reb: 6,  ast: 7 },
  { number: 75, name: 'TOMAS TORRES',          team: 'TOP CLUB', position: 'FORWARD-CENTER',  pts: 24, reb: 7,  ast: 5 },
  { number: 76, name: 'ULISES MARTINEZ',       team: 'TOP CLUB', position: 'GUARD',           pts: 12, reb: 2,  ast: 6 },
  { number: 77, name: 'VICTOR RAMIREZ',        team: 'TOP CLUB', position: 'FORWARD',         pts: 22, reb: 9,  ast: 3 },
  { number: 78, name: 'WALTER CASTILLO',       team: 'TOP CLUB', position: 'CENTER',          pts: 30, reb: 14, ast: 2 },
  { number: 79, name: 'XAVIER MORENO',         team: 'TOP CLUB', position: 'FORWARD-GUARD',   pts: 15, reb: 5,  ast: 7 },
  { number: 80, name: 'YURI JIMENEZ',          team: 'TOP CLUB', position: 'FORWARD-CENTER',  pts: 26, reb: 8,  ast: 4 },
  { number: 81, name: 'ZOE MARTIN',            team: 'TOP CLUB', position: 'GUARD',           pts: 13, reb: 3,  ast: 5 },
  { number: 82, name: 'ALFREDO LOPEZ',         team: 'TOP CLUB', position: 'FORWARD',         pts: 23, reb: 9,  ast: 3 },
  { number: 83, name: 'BENITO RAMOS',          team: 'TOP CLUB', position: 'CENTER',          pts: 28, reb: 12, ast: 2 },
  { number: 84, name: 'CARLOS CRUZ',           team: 'TOP CLUB', position: 'FORWARD-GUARD',   pts: 17, reb: 6,  ast: 8 },
  { number: 85, name: 'DIEGO PENA',            team: 'TOP CLUB', position: 'FORWARD-CENTER',  pts: 25, reb: 9,  ast: 5 },
  { number: 86, name: 'ENRIQUE VEGA',          team: 'TOP CLUB', position: 'GUARD',           pts: 14, reb: 4,  ast: 6 },
  { number: 87, name: 'FABIAN SANTOS',         team: 'TOP CLUB', position: 'FORWARD',         pts: 22, reb: 8,  ast: 3 },
  { number: 88, name: 'GERARDO MORENO',        team: 'TOP CLUB', position: 'CENTER',          pts: 29, reb: 13, ast: 2 },
  { number: 89, name: 'HERNAN JIMENEZ',        team: 'TOP CLUB', position: 'FORWARD-GUARD',   pts: 16, reb: 5,  ast: 7 },
  { number: 90, name: 'IGNACIO MARTINEZ',      team: 'TOP CLUB', position: 'FORWARD-CENTER',  pts: 24, reb: 7,  ast: 4 },
  { number: 91, name: 'JORGE RAMIREZ',         team: 'TOP CLUB', position: 'GUARD',           pts: 12, reb: 3,  ast: 5 },
  { number: 92, name: 'KARIM CASTILLO',        team: 'TOP CLUB', position: 'FORWARD',         pts: 23, reb: 9,  ast: 3 },
  { number: 93, name: 'LUIS VEGA',             team: 'TOP CLUB', position: 'CENTER',          pts: 30, reb: 14, ast: 2 },
  { number: 3,  name: 'SERGIO MUÑOZ',        team: 'TOP CLUB', position: 'GUARD',          pts: 18, reb: 6,  ast: 4 },
  { number: 93, name: 'ARMANDO SERNA',             team: 'TOP CLUB', position: 'CENTER',          pts: 30, reb: 14, ast: 2 },
  { number: 89, name: 'HERNAN GONZALES',        team: 'TOP CLUB', position: 'FORWARD-GUARD',   pts: 16, reb: 5,  ast: 7 },

];

const Roster = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState(players);
  const [rowColorMode, setRowColorMode] = useState('none');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // ⭐ Historial de búsquedas
  const [searchHistory, setSearchHistory] = useState([]);

  // 🌙 Modo oscuro persistente
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) setDarkMode(JSON.parse(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // 🔍 Debounce búsqueda
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // 🔎 Filtrado + reset paginación
  useEffect(() => {
    const results = players.filter(player =>
      player.name.includes(debouncedSearch)
    );
    setFilteredPlayers(debouncedSearch === '' ? players : results);
    setCurrentPage(1);
    setSelectedPlayer(null);
  }, [debouncedSearch]);

  // 📜 Historial de búsquedas persistente
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  // 📜 Tracking de cambios en debouncedSearch
  useEffect(() => {
    if (debouncedSearch && debouncedSearch.length > 2) {
      setSearchHistory(prev => {
        const updated = [debouncedSearch, ...prev.filter(s => s !== debouncedSearch)];
        return updated.slice(0, 5);
      });
    }
  }, [debouncedSearch]);

  const handleSearch = (e) => setSearchTerm(e.target.value.toUpperCase());
  const clearSearchAndColors = () => {
    setSearchTerm('');
    setFilteredPlayers(players);
    setRowColorMode('none');
    setCurrentPage(1);
    setSelectedPlayer(null);
  };
  const applyRowColor = (mode) => setRowColorMode(mode);

  const restoreSearch = (term) => {
    setSearchTerm(term);
    setDebouncedSearch(term);
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  // 📄 Paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPlayers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPlayers.length / itemsPerPage);

  // 📊 Calcular eficiencia
  const calcEfficiency = (p) => p.pts + p.reb + p.ast;

  return (
    <div className={`ROSTER ${darkMode ? 'dark' : 'light'}`}>
      <div className="performance-header">
        <div className="performance-header__stack">
          <h1 className="performance-title">Central de Rendimiento</h1>
          <div className="performance-tags">
            <span className="tag tag--purple">TOP CLUB</span>
            <span className="tag tag--teal">BASKETBALL</span>
          </div>
          <p className="performance-authors">
            Autores: <strong>Miguel Angel Montoya Giraldo</strong> - <strong>Cristian Camilo Soto jimenez</strong>
          </p>
          <div className="toggle-mode">
            <label>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              {darkMode ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
            </label>
          </div>
        </div>
      </div>

      {/* 🔍 Búsqueda */}
      <div className="roster__search-bar">
        <input
          type="text"
          placeholder="Buscar por nombre jugador..."
          value={searchTerm}
          onChange={handleSearch}
          className="roster__search-input"
        />
        {searchTerm && (
          <button onClick={clearSearchAndColors} className="roster__clear-button">X</button>
        )}
      </div>

      {/* 📜 Historial de búsquedas */}
      {searchHistory.length > 0 && (
        <div className="search-history">
          <label>Historial:</label>
          <select onChange={(e) => restoreSearch(e.target.value)}>
            <option value="">-- Selecciona búsqueda --</option>
            {searchHistory.map((term, idx) => (
              <option key={idx} value={term}>{term}</option>
            ))}
          </select>
          <button onClick={clearHistory} className="clear-history">Limpiar historial</button>
        </div>
      )}

      <p className="roster__counter">
        Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredPlayers.length)} de {filteredPlayers.length} registros
      </p>

      {/* 🎨 Botones de coloreo */}
      <div className="roster__filter-buttons">
        <button className="roster__filter-button" onClick={() => applyRowColor('even')}>Filas Pares</button>
        <button className="roster__filter-button" onClick={() => applyRowColor('odd')}>Filas Impares</button>
        <button className="roster__filter-button" onClick={clearSearchAndColors}>Limpiar Resultado</button>
      </div>

      {/* 🔢 Selector de página */}
      <div className="pagination-controls">
        <label>Mostrar: </label>
        <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <span> por página</span>
      </div>
            {/* 📋 Tabla */}
      <table className="roster__table">
        <thead className="roster__table-head">
          <tr>
            <th className="roster__table-cell">#</th>
            <th className="roster__table-cell">JUGADOR</th>
            <th className="roster__table-cell">EQUIPO</th>
            <th className="roster__table-cell">POSICIÓN</th>
            <th className="roster__table-cell">PTS</th>
            <th className="roster__table-cell">REB</th>
            <th className="roster__table-cell">AST</th>
            <th className="roster__table-cell">EFICIENCIA</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((player) => {
            const eff = calcEfficiency(player);
            return (
              <tr
                key={player.number}
                onClick={() => setSelectedPlayer(player)}
                className={`roster__table-body-row ${
                  rowColorMode === 'even' && player.number % 2 === 0 ? 'row--even' :
                  rowColorMode === 'odd' && player.number % 2 !== 0 ? 'row--odd' : ''
                }`}
              >
                <td className="roster__table-body-cell">{player.number}</td>
                <td className="roster__table-body-cell">{player.name}</td>
                <td className="roster__table-body-cell">{player.team}</td>
                <td className="roster__table-body-cell">{player.position}</td>
                <td className="roster__table-body-cell">{player.pts}</td>
                <td className="roster__table-body-cell">{player.reb}</td>
                <td className="roster__table-body-cell">{player.ast}</td>
                <td className="roster__table-body-cell">{eff}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 📊 Estadísticas individuales al seleccionar jugador */}
      {selectedPlayer && (
        <div className="stats-panel">
          <h2>📊 Estadísticas de {selectedPlayer.name}</h2>
          <p>Equipo: {selectedPlayer.team}</p>
          <p>Posición: {selectedPlayer.position}</p>
          <p>PTS: {selectedPlayer.pts}</p>
          <p>REB: {selectedPlayer.reb}</p>
          <p>AST: {selectedPlayer.ast}</p>
          <p>EFICIENCIA: {calcEfficiency(selectedPlayer)}</p>

          <button onClick={() => setSelectedPlayer(null)} className="close-stats">
            Cerrar
          </button>
        </div>
      )}

      {/* Navegación de paginación */}
      <div className="pagination-nav">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>Primera</button>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Anterior</button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? 'active-page' : ''}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button disabled={currentPage === totalPages || totalPages === 0} onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</button>
        <button disabled={currentPage === totalPages || totalPages === 0} onClick={() => setCurrentPage(totalPages)}>Última</button>
      </div>

      {/* Redes sociales */}
      <div className="social">
        <a href="#" className="social__link">
          <img src="https://img.icons8.com/color/48/twitter.png" alt="Twitter" className="social__icon" />
        </a>
        <a href="#" className="social__link">
          <img src="https://img.icons8.com/color/48/pinterest--v1.png" alt="Pinterest" className="social__icon" />
        </a>
        <a href="#" className="social__link">
          <img src="https://img.icons8.com/color/48/reddit.png" alt="Reddit" className="social__icon" />
        </a>
        <a href="#" className="social__link">
          <img src="https://img.icons8.com/color/48/tumblr.png" alt="Tumblr" className="social__icon" />
        </a>
        <a href="#" className="social__link">
          <img src="https://img.icons8.com/color/48/filled-message.png" alt="Email" className="social__icon" />
        </a>
      </div>
    </div>
  );
};

export default Roster;





      