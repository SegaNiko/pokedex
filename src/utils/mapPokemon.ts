import { Pokemon, PokemonResponse, PokemonStats, PokemonStatsMaped, PokemonTypeMaped, PokemonType } from "@models/pokemon";

 const mapPokemonStats = (stats: PokemonStats[]): PokemonStatsMaped[] => {
  const statsMaped = stats.map((pokStat): PokemonStatsMaped => {
    const {base_stat, stat} = pokStat;

    return {
      power: base_stat,
      name: stat.name
    }
  })
  return statsMaped;
}

 const mapPokemonType = (stats: PokemonType[]): PokemonTypeMaped[] => {
  const statsMaped = stats.map((pokType): PokemonTypeMaped => {
    const {slot, type} = pokType;

    return {
      slot,
      name: type.name
    }
  })

  return statsMaped;
}

export const mapPokemon = (pokemon : PokemonResponse): Pokemon => {
  const {name, id, moves, types, sprites, weight, stats, } = pokemon

  return {
    name: name,
    id: id,
    moves: moves.length,
    weight: weight,
    stats: mapPokemonStats(stats),
    types: mapPokemonType(types),
    sprites: sprites,
  }
};
