export default function Home() {
    return (
        <div class="container text-center">
    <h1 className="mt-5">Welcome to the Pokémon Website</h1>
    
    <div class="mt-5">
      <a href="/pokemon-list" className="btn btn-primary m-2">All Pokémon</a>
      <a href="/owned-pokemons" className="btn btn-success m-2">Your Pokémon</a>
    </div>
  </div>
  
    );
}