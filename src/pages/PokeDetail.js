import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonDetail({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState(null);

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

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
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
