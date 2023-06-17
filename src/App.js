import './App.css';
import Navbar from './components/navbar';
import PokeList from './pages/PokeList';
import PokemonDetail from './pages/PokeDetail';
import YourPoke from './pages/YourPoke';
import React from 'react';
import Home from './pages/Home';

function App() {
  let component
  const pokemonName = window.location.pathname.split("/").pop();
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/pokemon-list":
      component = <PokeList />;
      break;
    case "/owned-pokemons":
      component = <YourPoke />;
      break;
    case "/pokemon-list/" + pokemonName:
      component = <PokemonDetail pokemonName={pokemonName}/>;
      break;
    default:
      component = <Home />;
      break;
  }

  return (
    <React.Fragment>
      <Navbar />
      {component}
    </React.Fragment>

  );
}

export default App;

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>