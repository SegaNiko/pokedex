import axios from 'axios';

import { Pokemon, PokemonRequestProps, PokemonResponse, PokemonTypesResponse } from "@models/pokemon";
import { PokemonsRequestProps, PokemonsResponse } from "@models/pokemons";
import { endpoints }  from '@consts/endpoints';
import { mapPokemon } from '@utils/mapPokemon';

export const apiPokemons = async (params: PokemonsRequestProps): Promise<PokemonsResponse> => {
  const url = endpoints.pokemons(params);

  try {
    const response = await axios.get<PokemonsResponse>(url);
    return response.data;
  } catch (error) {
    console.log('Some Error: ', error);
    throw error;
  }
};

export const apiPokemon = async (params: PokemonRequestProps): Promise<PokemonResponse> => {
  const url = endpoints.pokemon(params);

  try {
    const response = await axios.get<PokemonResponse>(url);
    return response.data;
  } catch (error) {
    console.log('Some Error: ', error);
    throw error;
  }
};

export const apiEachPokemon = async (pokemons: PokemonsRequestProps): Promise<Pokemon[]> => {
  const response = await apiPokemons(pokemons);

  const allPromises: Promise<Pokemon>[] = response.results.map((pokemon) => {
    return apiPokemon({id: pokemon.name}).then((res) => {
      return mapPokemon(res);
    });
  });

  const allPokemons = await Promise.all(allPromises)

  return allPokemons;
};

export const apiPokemonTypes = async (): Promise<PokemonTypesResponse> => {
  const url = endpoints.types;

  try {
    const response = await axios.get<PokemonTypesResponse>(url);
    return response.data;
  } catch (error) {
    console.log('Some Error: ', error);
    throw error;
  }
};