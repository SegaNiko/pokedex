import { Pokemon } from "@models/pokemon";

export const filterPokemonByType = (pokemon: Pokemon[], type: string) => {
  if (type === "all") return pokemon;

  return pokemon.filter((p) =>
    p.types.some((t) => t.name.toLowerCase() === type.toLowerCase())
  );
};