import { makeStyles, MenuItem, Select } from "@material-ui/core";
import React, {useEffect} from "react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/actions/pokemon-select-actions";

import './pokemon-selector.css'
const PokemonSelector: FunctionComponent = () => {
    const useStyles = makeStyles({
      root: {
        fontFamily: "VT323, monospace",
        marginTop: '10px'
      },
    });

    const classes = useStyles();
    const [selectedPokemon, setSelectedPokemon] = React.useState('');
    const [availablePokemon, setAvailablePokemon] = React.useState<PokemonListItem[]>([]);

    const pokemonList = useSelector((state:ApplicationState)=> state.pokemonList)
    const pokemonSelected = useSelector((state:ApplicationState)=> state.pokemonSelected)
    const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
      setSelectedPokemon(event.target.value);
    };
    const dispatch = useDispatch()
    const getSelectedPokemon:(url:string) => void = React.useCallback(
      (url:string) => dispatch(getPokemon(url)),
      [dispatch])
  
    useEffect(() =>{
      if(pokemonList.isFetched)
      {
        setAvailablePokemon(pokemonList.list)
        setSelectedPokemon(pokemonList.list[0].url)
      }
      },[pokemonList.isFetched])
       
    useEffect(() => {
      if(selectedPokemon)
      {
        getSelectedPokemon(selectedPokemon)
      }
    }, [selectedPokemon])

    return <div id="pokemon-selector-parent">
      <div id="pretty-detail-header">
        <div id="pretty-top-padding">
          <div id="pretty-light" className={pokemonSelected.isFetched? "pretty-light-on" : "pretty-light-off"}>
          </div>
          <div id="pokemon-select-holder">
          <Select
            className={classes.root}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedPokemon}
            onChange={handleChange}
            name={selectedPokemon}
          >
            {availablePokemon.map((item)=>{
              const number = getPokemonNumber(item);
              return <MenuItem 
              className={classes.root}
              key={item.name + "select"} 
              value={item.url}>
                {`${item.name} - (${number})`}
              </MenuItem>
              })}
          
          </Select>
          </div>
        </div>
        
      </div>
    </div>
}

export default PokemonSelector

function getPokemonNumber(item: PokemonListItem) {
  const re = /pokemon\/(\d*)\//g
  const number = re.exec(item.url)[1];
  return number;
}
