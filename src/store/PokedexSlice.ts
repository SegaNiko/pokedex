import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Pokemon, PokemonTypes } from '@models/pokemon';

export interface PokedexState {
  pokemons:[] | Pokemon[],
  count: number,
  limit: number,
  offset: number,
  types: PokemonTypes[] | [],
}

const initialState: PokedexState = {
  pokemons: [],
  count: 0,
  limit: 12,
  offset: 0,
  types: [],
}

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
   getPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
    getMorePokemons: (state,action: PayloadAction<Pokemon[]>) => {
      state.pokemons = [...state.pokemons, ...action.payload];
      state.offset = state.offset + 12;
    },
    getPokemonsTypes: (state, action: PayloadAction<PokemonTypes[]>) => {
      state.types = action.payload
    }
  },
})

export const { getPokemons, getMorePokemons, getPokemonsTypes } = pokedexSlice.actions

export default pokedexSlice.reducer