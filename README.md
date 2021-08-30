# Pokedex 

This is a TypeScript+React+Redux project which implements the business logic for handling some of the [PokeAPI](https://pokeapi.co/). 

A deployment of this app can be seen on the following Heroku address:

https://pokedexbras.herokuapp.com/

Select one of the 150 Pokemon on the dropdown up top. The application will then plot a Radar chart of the selected Pokemon base stat attributes.

# Developing

To develop this project, you'll need a version of Node 14.x installed locally.

Alternatively, a build script with docker-compose is provided with all the configuration necessary for local development.

1. Install [Docker](https://docs.docker.com/engine/install/)
2. Install [Docker-compose](https://docs.docker.com/compose/install/)
3. Run ``` docker compose up ```

The development server should now be running on port 80. To change this port server or address, merely edit the `docker-compose.yaml` to the preferred port. To run the deployment scripts, set `DEVELOPMENT_MODE` to `0`.

# Basic explanation

Redux, with the redux-thunk dependency, is in charge of handling the async API calls and altering the application state accordingly. "Wait" states are in place to make the interface behave differently while waiting for the API response. There are 2 reducers in place, one for fetching the pokemon list (pokemon-list-reducer.tsx) and one for fetching the selected, individual pokemon (pokemon-select-reducer.tsx).

React `useEffect` hooks are used to observe application state transitions and perform changes to the interface dynamically. There are 2 components, one for  selecting Pokemon (pokemon-selector.tsx) and one for drawing images and the Radar plot (pokemon-display.tsx).

### Todo:
- API Caching
- Different plot views
- Lazy Loading
