/**
 * Combine all reducers for the application state
 */

import pokemonList from './pokemon-list-reducer'
import pokemonSelected from './pokemon-select-reducer'
import { combineReducers } from 'redux'
const rootReducer = combineReducers(
  {
    pokemonList,
    pokemonSelected
  }
)

export default rootReducer