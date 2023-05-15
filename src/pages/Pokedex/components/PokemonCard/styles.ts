import styles from 'styled-components';
import { pokemonColors } from '@styles/pokemonsTypes'

interface TypeStyleProps {
  type: string;
}

export const PokemonCardWrap = styles.div`
  cursor: pointer;
  height: 160px;
  width: 280px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
  position: relative;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 10px 20px;
  margin-bottom: 20px;
  overflow: hidden;
`

export const PokemonCardBackgroundCircle = styles.div`
    width: 200px;
    height: 200px;
    z-index: -1;
    background: linear-gradient(45deg, rgba(0,0,0,0.8), transparent);
    position: absolute;
    left: -39px;
    border-radius: 100%;
`

export const PokemonCardBackground = styles.div<TypeStyleProps>`
  background-color: ${({ type }) => pokemonColors[type] || '#A8A878'};
  width: 100%;
  height: 100%;
  opacity: 0.8;
  position: absolute;
  border-radius: 20px;
  z-index: -1;
  top: 0;
  left: 0;
`
export const PokemonName = styles.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 30px;
`

export const PokemonID = styles.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`

export const PokemonsTypeWrap = styles.div`
  display: flex;
`

export const PokemonTypes = styles.div<TypeStyleProps>`
  background-color: ${({ type }) => pokemonColors[type] || '#A8A878'};
  padding: 5px 10px;
  border-radius: 11px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 200;
  line-height: 14px;
  text-align: center;
`

export const PokemonImg = styles.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-20px, -50%);
`