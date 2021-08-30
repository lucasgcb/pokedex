import { GET_POKEMON_LIST, SET_POKEMON_LIST } from "../actions/pokemon-list-actions"
import { GET_POKEMON_SELECTED, SET_POKEMON_SELECTED } from "../actions/pokemon-select-actions"

const initialState:PokemonSelectedState = {
    isFetching: false,
    isFetched: false,
    name: '',
    stats: {
      hp: 0,
      attack: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0
    },
    picture: 'todo'
}
const reducer = (
  state: PokemonSelectedState = initialState,
  action: PokemonSelectedFetchAction
): PokemonSelectedState => {
  switch (action.type) {
  case GET_POKEMON_SELECTED: {
    return {
        ...initialState,
        isFetching: true,
        isFetched: false,
    }
  }

  case SET_POKEMON_SELECTED: {
    return action.payload
  }
  }
  return state
}
  
export default reducer