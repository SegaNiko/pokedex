
export interface Pokemon {
  name: string,
  id: number,
  moves: number,
  weight: number,
  stats: PokemonStatsMaped[],
  types: PokemonTypeMaped[],
  sprites: PokemonSprites,
}

export const emptyPokemon: Pokemon = {
  name: '',
  id: 0,
  moves: 0,
  weight: 0,
  stats: [],
  types: [{name: '', slot: 1 }],
  sprites: {
    front_default: '',
  },
};

export interface PokemonStats {
  base_stat: number,
  effort: number,
  stat: {
    name: string,
    url: string
  }
}

export interface PokemonTypes {
  name: string, url: string
}

export interface PokemonRequestProps {
  id: string | number,
}

export interface PokemonStatsMaped {
  power: number,
  name: string,
}

export interface PokemonType {
  slot: number,
  type: {
    name: string,
    url: string,
  }
}

export interface PokemonTypeMaped {
  slot: number,
  name: string,
}

export interface PokemonSprites {
  front_default: string
}

export interface PokemonResponse {
  data: {
    name: string,
    id: number,
    moves: any[],
    weight: number,
    stats: PokemonStats[],
    types: PokemonType[],
    sprites: PokemonSprites,
  }
}

export interface PokemonTypesResponse {
  data: {
    count: number,
    next:null,
    previous:null,
    results: PokemonTypes[],
  }
}

export interface getPokemoonsPayload {
  pokemons: Pokemon[],
  count: number,
}
