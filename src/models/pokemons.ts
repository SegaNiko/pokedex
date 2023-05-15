
export interface Pokemons {
  name: string,
  url: string,
}

export interface PokemonsResponse {
  count: number,
  results: Pokemons[],
}

export interface PokemonsRequestProps {
  limit: number,
  offset: number,
}
