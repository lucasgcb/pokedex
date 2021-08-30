import { GET_POKEMON_LIST, SET_POKEMON_LIST } from "../actions/pokemon-list-actions"

const initialState:PokemonListState = {
    isFetching: false,
    isFetched: false,
    list: []
}
const reducer = (
  state: PokemonListState = initialState,
  action: PokemonListFetchAction
): PokemonListState => {
  switch (action.type) {
  case GET_POKEMON_LIST: {
    return {
        ...initialState,
        isFetching: true,
        isFetched: false
    }
  }

  case SET_POKEMON_LIST: {
    return {
        isFetching: false,
        isFetched: true,
        list: action.payload
    }
  }
  }
  return state
}
  
export default reducer