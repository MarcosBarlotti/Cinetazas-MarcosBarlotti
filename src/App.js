import logo from './images/cinelogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
         Sitio en construcción
      </h1>
      <a
          className="App-link"
          href="www.cinetazas.com"
          target="_blank"
        >
          Ir al sitio actual
        </a>
        <a
          className="App-link"
          href="www.cinetazas.com"
          target="_blank"
        >
         <img src={logo} className="App-logo" alt="logo" />
        </a>
        
      </header>
    </div>
  );
}

export default App;
