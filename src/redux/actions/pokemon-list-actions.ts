export const GET_POKEMON_LIST = "GET_POKEMON"
export const SET_POKEMON_LIST = "SET_POKEMON"

const pokemonListApi = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
const defaultPokemonList:PokemonListItem[] = []
  

export function getPokemonList() {
    return (dispatch:FetchPokemonList) => {
        dispatch(waitResponse())
        fetch(`${pokemonListApi}`).then((response)=>{
            return response.json()
          }).then((jsonResponse:PokeApiPokemonList) => {
            dispatch(setNewPokemonList(jsonResponse.results))
          })
    }
}

export function setNewPokemonList(pokemonList:PokemonListItem[]) {
    return {
        type: SET_POKEMON_LIST,
        payload: pokemonList.sort()
    }
}


export function waitResponse():PokemonListFetchAction {
    return {
        type: GET_POKEMON_LIST,
        payload: defaultPokemonList
    }
}


