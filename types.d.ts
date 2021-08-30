/**
 * Declarations for API Types.
 */

type PokemonListItem = {
    name: string
    url: string
}

interface AbilityInterface {
    ability:{
        name: string
        url: string
    }
    is_hidden: boolean
    slot: number
}

interface GameIndicesInterface {
    game_index: number
    version: {
        name: string
        url: string
    }
}

type VersionGroup = {
    name: string
    url: string
}

type ItemVersionDetails = {
    rarity: number
    version: VersionGroup
}

type ItemType = { 
    name: string
    url: string
    version_details: ItemVersionDetails[]
}

type MoveLearnMethod = {
    name: string
    url: string
}

type Species = {
    name: string
    url: string
}

type VersionGroupDetail = {
    level_learned_at: number
    version_group: VersionGroup
    move_learn_method: MoveLearnMethod
}

interface MoveInterface {
    move: {
        name: string
        url: string
    }
    version_group_details: VersionGroupDetail[]
}

interface StatInterface {
    base_stat: number
    effort: number
    stat: {
        name: string
        url: string
    }
}

interface PokemonTypeInterface {
    slot: number
    name: string
    url: string
}

/**
 * I just care about these two.
 */

interface SpriteInterface {
    front_default: string | null
    back_default: string | null
}

interface PokemonInterface {
    abilities: AbilityInterface[]
    forms: PokemonListItem[]
    game_indices: GameIndicesInterface[]
    moves: MoveInterface[]
    held_items: ItemType[]
    past_types:PokemonListItem[]
    base_experience: number
    height: number
    weight: number
    id: number
    is_default: boolean
    location_area_encounters:string
    name: string
    order: number
    species: Species
    sprites: SpriteInterface
    stats: StatInterface[]
    types: PokemonTypeInterface[]
}

interface PokeApiPokemonList {
    count: number
    next: string | null
    previous: string | null 
    results: PokemonListItem[]
    
}

/**
 * Action Types.
 */

type PokemonListFetchAction = {
    type: string
    payload: PokemonListItem[]
}


type PokemonSelectedFetchAction = {
    type: string
    payload: PokemonSelectedState
}

type FetchPokemonList = (args: PokemonListFetchAction) => PokemonListFetchAction
type FetchPokemonSelection = (args: PokemonSelectedFetchAction) => PokemonSelectedFetchAction
/**
 * Reducer States.
 */

interface ApplicationState {
    pokemonList: PokemonListState
    pokemonSelected: PokemonSelectedState
}

interface PokemonListState {
    isFetching: boolean
    isFetched: boolean
    list: PokemonListItem[]
}



interface PokemonSelectedState {
    isFetching: boolean
    isFetched: boolean
    name: string
    stats: PokemonStatInterface
    picture: string
}

interface PokemonStatInterface {
    hp: number
    attack: number
    specialAttack: number
    specialDefense: number
    speed: number
}

