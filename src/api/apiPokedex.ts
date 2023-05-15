import axios from 'axios';

import { Pokemon, PokemonRequestProps, PokemonResponse, PokemonTypesResponse } from "@models/pokemon";
import { PokemonsRequestProps, PokemonsResponse } from "@models/pokemons";
import { endpoints }  from '@consts/endpoints';
import { pokemonMap } from '@utils/pokemonMap';

export const apiPokemons = (params: PokemonsRequestProps) => {
  const url = endpoints.pokemons(params);

  return new Promise<PokemonsResponse>((resolve, reject) => {
    axios({
      method: 'get',
      url,
    })
      .then((response) => {
        resolve(response);
      })
      .catch(error => console.log('Some Error: ',error))
  })
};

export const apiPokemon = (params: PokemonRequestProps) => {
    const url = endpoints.pokemon(params);

    return new Promise<PokemonResponse>((resolve, reject) => {
      axios({
        method: 'get',
        url,
      })
        .then((response) => {
          resolve(response);
        })
        .catch(error => console.log('Some Error: ',error))
    })
};

export const apiEachPokemon = async (pokemons: PokemonsRequestProps): Promise<Pokemon[]> => {
  const response = await apiPokemons(pokemons);

  const allPromises: Promise<Pokemon>[] = response.data.results.map((pokemon) => {
    return apiPokemon({id: pokemon.name}).then((res) => {
      return pokemonMap(res);
    });
  });

  const allPokemons = await Promise.all(allPromises)

  return allPokemons;
};

export const apiPokemonTypes = () => {
  const url = endpoints.types;

  return new Promise<PokemonTypesResponse>((resolve, reject) => {
    axios({
      method: 'get',
      url,
    })
      .then((res) => {
        resolve(res);
      })
      .catch(error => console.log('Some Error: ', error))
  })
};