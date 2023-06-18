# Pokemon Web App

Deployed web link: https://pokemon-web.up.railway.app/ 

This is a web application built using ReactJS that allows users to explore and catch pokemons. The application retrieves data from the PokeAPI and displays information about pokemons such as their name, type, weight, height, abilities, moves, and stats. Users can catch pokemons with a success probability of 50% and add them to their collection. The owned pokemons persist even after a full page reload.

## Getting Started

To run the web app locally, follow these steps:

1. Clone the Git repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd poke-web`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open a web browser and visit `http://localhost:3000` to access the application.

## Pages

The web app consists of the following pages:

### Pokemon List Page

This page displays a list of pokemons with pagination functionality. Users can browse through the list and click on a pokemon to view its details on the Pokemon Detail Page.

### Pokemon Detail Page

On this page, users can view detailed information about a selected pokemon. The information includes the pokemon's image, name, type, weight, height, abilities, moves, and stats. Users can also attempt to catch the pokemon, and if successful, it will be added to their collection.

### Owned Pokemon Page

This page shows the pokemons that the user has caught and added to their collection. Users can release (remove) pokemons from their collection if desired.

## External APIs

The web app utilizes the following external APIs:

- [PokeAPI](https://pokeapi.co/docs/v2): The PokeAPI is used to retrieve data about pokemons, including their details and images.
- [PokeAPI Sprites](https://github.com/PokeAPI/sprites): The PokeAPI Sprites repository is used to retrieve images of pokemons.

## Acknowledgments

- The developer would like to thank the creators and maintainers of the PokeAPI for providing the data and sprites used in this web app.

Feel free to explore and catch as many pokemons as you can! Enjoy the Pokemon Web App!
