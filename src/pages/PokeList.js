import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokeList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Calculate the offset based on the current page and number of Pokémon per page
    const offset = (currentPage - 1) * pokemonPerPage;

    // Make the API request to retrieve the list of Pokémon
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=${pokemonPerPage}`)
      .then(response => {
        // Extract the list of Pokémon from the response
        const results = response.data.results;
        setPokemonList(results);

        // Calculate the total number of pages
        const totalCount = response.data.count;
        setTotalPages(Math.ceil(totalCount / pokemonPerPage));
      })
      .catch(error => {
        console.error("Error fetching Pokémon list:", error);
      });
  }, [currentPage, pokemonPerPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container my-3">
      <h1>All Pokémon</h1>
      <div className="list-group my-3">
        {pokemonList.map(pokemon => (
            <a 
            href={`/pokemon-list/${pokemon.name}`} 
            className="p"
            >
                <button
                type="button"
                className="list-group-item list-group-item-action"
                key={pokemon.name}
                >
                <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}
                alt={pokemon.name}
                className="mr-3"
                />
                <strong className="ms-3">{pokemon.name}</strong>
                </button>
            </a>
        ))}
       </div>
      <div>
        <button
          type="button"
          className="btn btn-dark m-2"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span className="m-2">Page {currentPage} of {totalPages}</span>
        <button
          type="button"
          className="btn btn-dark"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
