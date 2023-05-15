import { PokemonRequestProps } from "@models/pokemon";
import { PokemonsRequestProps } from "@models/pokemons";

const API_URL = 'https://pokeapi.co/api/v2';

export const endpoints = {
  pokemons: ({limit, offset}: PokemonsRequestProps) => `${API_URL}/pokemon?limit=${limit}&offset=${offset}`,
  pokemon: ({id}: PokemonRequestProps) => `${API_URL}/pokemon/${id}`,
  types: `${API_URL}/type?limit=20`,
}
