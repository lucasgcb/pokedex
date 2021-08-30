/**
 * App
 * 
 * Parent component of the application.
 */
 import React, { FunctionComponent,Dispatch, useEffect } from 'react'
 import '../static/styles/App.css'
 import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getPokemonList } from '../redux/actions/pokemon-list-actions'
import PokemonSelector from './pokemon-selector/pokemon-selector'
import PokemonDisplay from './pokemon-display/pokemon-display'
 
 const App: FunctionComponent = () =>
 {
   const dispatch = useDispatch()
   const getAllPokemons:() => void = React.useCallback(
     () => dispatch(getPokemonList()),
     [dispatch])
 
   useEffect(() =>{
    getAllPokemons()
   },[])
   
   return(
     <React.Fragment>
         <PokemonSelector></PokemonSelector>
         <PokemonDisplay></PokemonDisplay>
     </React.Fragment>
   )
 }
 
 
 export default App