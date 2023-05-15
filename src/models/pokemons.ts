
export interface Pokemons {
  name: string,
  url: string,
}

export interface PokemonsResponse {
  data: {
    count: number,
    results: Pokemons[],
  }
}

export interface PokemonsRequestProps {
  limit: number,
  offset: number,
}
