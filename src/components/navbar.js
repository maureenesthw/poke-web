export default function Navbar() {
    return <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">

<div className="container-fluid">
    <a className="navbar-brand" href="/">
        <img src="/poke_ball.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
        Pokémon
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/pokemon-list">All Pokémon</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/owned-pokemons">Your Pokémon</a>
        </li>
        
      </ul>
    </div>
</div>

       
    </nav>
}