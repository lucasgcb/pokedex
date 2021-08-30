export const GET_POKEMON_SELECTED = "GET_POKEMON_SELECTED"
export const SET_POKEMON_SELECTED = "SET_POKEMON_SELECTED"

const defaultPokemon:PokemonSelectedState = {
    isFetching: false,
    isFetched: false,
    name: '',
    stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0
    },
    picture: ''
}
  

export function getPokemon(pokemonUrl:string) {
    return (dispatch:FetchPokemonSelection) => {
        dispatch(waitResponse())
        fetch(`${pokemonUrl}`).then((response)=>{
            return response.json()
          }).then((jsonResponse:PokemonInterface) => {
            dispatch(setNewPokemon(jsonResponse))
          })
    }
}

export function setNewPokemon(pokemon:PokemonInterface) {
    let retrievedStats = {
        ...defaultPokemon.stats
    }
    pokemon.stats.map((statItem)=>{
        if(statItem.stat.name=="hp")
            return retrievedStats.hp = statItem.base_stat
        if(statItem.stat.name=="attack")
            return retrievedStats.attack = statItem.base_stat
        if(statItem.stat.name=="defense")
            return retrievedStats.defense = statItem.base_stat
        if(statItem.stat.name=="special-attack")
            return retrievedStats.specialAttack = statItem.base_stat
        if(statItem.stat.name=="special-defense")
            return retrievedStats.specialDefense = statItem.base_stat
        if(statItem.stat.name=="speed")
            return retrievedStats.speed = statItem.base_stat
    })
    const newState:PokemonSelectedState = {
        isFetching: false,
        isFetched: true,
        name: pokemon.name,
        stats: retrievedStats,
        picture: pokemon.sprites.front_default
    }
    return {
        type: SET_POKEMON_SELECTED,
        payload: newState
    }
}


export function waitResponse():PokemonSelectedFetchAction {
    return {
        type: GET_POKEMON_SELECTED,
        payload: defaultPokemon
    }
}


