import { configureStore } from '@reduxjs/toolkit';
import { pokedexSlice } from '@store/PokedexSlice';

export const store = configureStore({
  reducer: {
    pokedex: pokedexSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const selectPokemons = (state: RootState) => state.pokedex.pokemons;
export const selectPageParams = (state: RootState) => ({ limit: state.pokedex.limit, offset: state.pokedex.offset });
export const selectTypes = (state: RootState) => state.pokedex.types;
export const selectCount = (state: RootState) => state.pokedex.count;

export type AppDispatch = typeof store.dispatch;
