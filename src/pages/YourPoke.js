import React, { useEffect, useState } from "react";

export default function YourPoke() {
  const [ownedPokemon, setOwnedPokemon] = useState([]);

  useEffect(() => {
    // Retrieve the owned Pokémon from local storage
    const storedPokemon = localStorage.getItem("ownedPokemon");
    if (storedPokemon) {
      setOwnedPokemon(JSON.parse(storedPokemon));
    }
  }, []);

  const releasePokemon = (pokemonId) => {
    // Remove the released Pokémon from the collection
    const updatedPokemon = ownedPokemon.filter(
      (pokemon) => pokemon.id !== pokemonId
    );
    setOwnedPokemon(updatedPokemon);

    // Update the local storage with the updated collection
    localStorage.setItem("ownedPokemon", JSON.stringify(updatedPokemon));
  };

  return (
    <div className="container my-3">
      <h2>Your Pokémon</h2>
      {ownedPokemon.length === 0 ? (
        <p>No Pokémon in your collection.</p>
      ) : (
        <div className="list-group my-3">
          {ownedPokemon.map((pokemon) => (
            <div
              className="list-group-item d-flex align-items-center justify-content-between"
              key={pokemon.name}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                className="me-3"
              />
              <strong className="ms-3">{pokemon.name}</strong>
              <button
                onClick={() => releasePokemon(pokemon.id)}
                className="btn btn-outline-dark"
              >
                Release
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
