import {
  PokemonSelectedBoxLeft,
  PokemonSelectedBoxRight,
  PokemonSelectWrap,
  PokemonCardBackground,
  PokemonSelectedBackgroundCircle,
  PokemonSelectedTypes,
  PokemonSlectedID,
  PokemonSlectedName,
  PokemonSlectedTypeWrap,
  PokemonSlectedImgDiv,
  PokemonSelectedStats,
  PokemonSelectedStatsWrap,
  PokemonSelectedStatsName,
} from './styles';

import { Pokemon } from '@models/pokemon';
import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';

interface SelectedPokemon extends React.HTMLAttributes<HTMLElement> {
  pokemon: Pokemon;
}

const PokemonSelected: React.FC<SelectedPokemon> = props => {
  const { id, moves, weight, stats, types, sprites, name } = props.pokemon;

  return (
    <PokemonSelectWrap>
      <PokemonCardBackground type={types[0].name} />
      <PokemonSelectedBackgroundCircle />
      <PokemonSlectedImgDiv url={sprites.front_default} />
      <PokemonSelectedBoxLeft>
        {stats.map(stat => (
          <PokemonSelectedStatsWrap key={stat.name}>
            <PokemonSelectedStats>{stat.power}</PokemonSelectedStats>
            <PokemonSelectedStatsName>{capitalizeFirstLetter(stat.name)}</PokemonSelectedStatsName>
          </PokemonSelectedStatsWrap>
        ))}
        <PokemonSelectedStatsWrap>
          <PokemonSelectedStats>{weight}</PokemonSelectedStats>
          <PokemonSelectedStatsName>Weight</PokemonSelectedStatsName>
        </PokemonSelectedStatsWrap>
        <PokemonSelectedStatsWrap>
          <PokemonSelectedStats>{moves}</PokemonSelectedStats>
          <PokemonSelectedStatsName>Moves</PokemonSelectedStatsName>
        </PokemonSelectedStatsWrap>
      </PokemonSelectedBoxLeft>
      <PokemonSelectedBoxRight>
        <PokemonSlectedID>#{id}</PokemonSlectedID>
        <PokemonSlectedName>{capitalizeFirstLetter(name)}</PokemonSlectedName>
        <PokemonSlectedTypeWrap>
          {types.map(type => (
            <div key={type.name}>
              <PokemonSelectedTypes type={type.name}>{capitalizeFirstLetter(type.name)}</PokemonSelectedTypes>
            </div>
          ))}
        </PokemonSlectedTypeWrap>
      </PokemonSelectedBoxRight>
    </PokemonSelectWrap>
  );
};

export default PokemonSelected;
