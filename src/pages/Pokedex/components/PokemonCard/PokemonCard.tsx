import { Pokemon } from '@models/pokemon';

import {
  PokemonCardBackground,
  PokemonCardBackgroundCircle,
  PokemonCardWrap,
  PokemonID,
  PokemonImg,
  PokemonName,
  PokemonTypes,
  PokemonsTypeWrap,
} from './styles';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';

interface PokemonProps extends React.HTMLAttributes<HTMLElement> {
  pokemon: Pokemon;
  onClick: () => void;
}

const PokemonCard: React.FC<PokemonProps> = props => {
  const { onClick, pokemon } = props;
  const { id, name, types, sprites } = pokemon;

  return (
    <>
      <PokemonCardWrap onClick={onClick}>
        <PokemonCardBackground type={types[0].name} />
        <PokemonCardBackgroundCircle />
        <PokemonID>#{id}</PokemonID>
        <PokemonName>{capitalizeFirstLetter(name)}</PokemonName>
        <PokemonsTypeWrap>
          {types.map(type => (
            <div key={type.name}>
              <PokemonTypes type={type.name}>{capitalizeFirstLetter(type.name)}</PokemonTypes>
            </div>
          ))}
        </PokemonsTypeWrap>
        <PokemonImg src={sprites.front_default} alt={name} />
      </PokemonCardWrap>
    </>
  );
};

export default PokemonCard;
