import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonDetail({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [isCaught, setIsCaught] = useState(false);
  const [catchAttempt, setCatchAttempt] = useState(false);

  useEffect(() => {
    // Make the API request to retrieve the details of the Pokémon
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        // Extract the details of the Pokémon from the response
        const data = response.data;
        setPokemonData(data);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon details:", error);
      });
  }, [pokemonName]);

  const catchPokemon = () => {
    // Randomly determine if the catch attempt is successful (50% chance)
    const isSuccess = Math.random() < 0.5;
    setCatchAttempt(true);

    if (isSuccess) {
      // Add the caught Pokémon to the collection
      const caughtPokemon = {
        id: pokemonData.id,
        name: pokemonData.name,
      };

      // Retrieve the current collection from local storage
      const storedPokemon = localStorage.getItem("ownedPokemon");
      let updatedPokemon = [];

      if (storedPokemon) {
        updatedPokemon = JSON.parse(storedPokemon);
      }

      // Check if the Pokémon is already in the collection
      const isDuplicate = updatedPokemon.some(
        (pokemon) => pokemon.id === caughtPokemon.id
      );

      if (!isDuplicate) {
        updatedPokemon.push(caughtPokemon);

        // Update the local storage with the updated collection
        localStorage.setItem("ownedPokemon", JSON.stringify(updatedPokemon));

        setIsCaught(true);
      } else {
        setIsCaught(false);
      }
    } else {
      setIsCaught(false);
    }
  };

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-3 d-flex flex-column align-items-center">
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <button onClick={catchPokemon} disabled={catchAttempt} className="btn btn-outline-dark">
        {catchAttempt ? "Catching..." : "Catch!"}
      </button>
      {catchAttempt && (
        <p style={{ color: "red" }}>{isCaught ? "You caught the Pokémon!" : "Failed to catch the Pokémon."}</p>
      )}
      <h3>Type: {pokemonData.types.map((type) => type.type.name).join(", ")}</h3>
      <p>Weight: {pokemonData.weight} kg</p>
      <p>Height: {pokemonData.height} cm</p>
      <h3>Abilities:</h3>
      <ul>
        {pokemonData.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Moves:</h3>
      <ul>
        {pokemonData.moves.map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
      <h3>Stats:</h3>
      <ul>
        {pokemonData.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
