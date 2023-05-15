import { Pokemon, PokemonResponse, PokemonStats, PokemonStatsMaped, PokemonTypeMaped, PokemonType } from "@models/pokemon";

 const pokemonStatsMap = (stats: PokemonStats[]): PokemonStatsMaped[] => {
  const statsMaped = stats.map((pokStat): PokemonStatsMaped => {
    const {base_stat, stat} = pokStat;

    return {
      power: base_stat,
      name: stat.name
    }
  })
  return statsMaped;
}

 const pokemonTypeMap = (stats: PokemonType[]): PokemonTypeMaped[] => {
  const statsMaped = stats.map((pokType): PokemonTypeMaped => {
    const {slot, type} = pokType;

    return {
      slot,
      name: type.name
    }
  })

  return statsMaped;
}

export const pokemonMap = (pokemonRes : PokemonResponse): Pokemon => {
  const { data } = pokemonRes;

  return {
    name: data.name,
    id: data.id,
    moves: data.moves.length,
    weight: data.weight,
    stats: pokemonStatsMap(data.stats),
    types: pokemonTypeMap(data.types),
    sprites: data.sprites,
  }
};
