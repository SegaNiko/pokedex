import styles from 'styled-components';
import { pokemonColors } from '@styles/pokemonsTypes';
import { devices } from '@styles/media';

interface TypeStyleProps {
  type: string;
};

export const PokemonSelectWrap = styles.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  height: 300px;
  color: white;

  @media ${devices.mobileM} {
      width: 100%;
      height: 85vh;
      flex-direction: column;
    }
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

export const PokemonSelectedBackgroundCircle = styles.div`
    width: 500px;
    height: 500px;
    background: linear-gradient(45deg, transparent, black);
    position: absolute;
    right: -60px;
    border-radius: 100%;

    @media ${devices.mobileM} {
      width: 500px;
      height: 500px;
      top: -24%;
      right: -10%;
    }

    @media ${devices.mobileS} {
      top: -24%;
      right: -17%;
    }

  @media ${devices.mobileXS} {
    width: 450px;
    height: 450px;
    top: -27%;
    right: -20%;
    }
`

export const PokemonSelectedBoxLeft = styles.div`
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    z-index: 2;
    height: 100%;

    @media ${devices.mobileM} {
      width: 100%;
      margin-top: 20px;
      justify-content: space-evenly;
      }
`
export const PokemonSelectedBoxRight = styles.div`
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    height: 100%;
    flex-direction: column;

    @media ${devices.mobileL} {
      width: 65%;
    }

    @media ${devices.mobileM} {
    width: 100%;
    order: -1;
    }
`

export const PokemonSelectedTypes = styles.div<TypeStyleProps>`
  background-color: ${({ type }) => pokemonColors[type] || '#A8A878'};
  padding: 10px 15px;
  border-radius: 11px;
  margin-right: 10px;
  font-size: 20px;
  font-weight: 200;
  line-height: 14px;
  text-align: center;

  @media ${devices.mobileM} {
    margin-right: 0px;
  }
`

interface ImgStyleProps {
  url: string;
};

export const PokemonSlectedImgDiv = styles.div<ImgStyleProps>`
  background: ${({ url }) =>  `url(${url})`};
  height: 200px;
  width: 200px;
  background-size: cover;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(-10%, -50%);

  @media ${devices.mobileM} {
    top: 10%;
    right: 50%;
    transform: translate(50%, 0%);
    }
    @media ${devices.mobileXS} {
      top: 5%;

      }
`

export const PokemonSlectedName = styles.div`
  font-weight: 300;
  font-size: 40px;
  line-height: 30px;
`

export const PokemonSlectedID = styles.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`

export const PokemonSlectedTypeWrap = styles.div`
display: flex;

`

export const PokemonSelectedStatsWrap = styles.div`
text-align: center;
  align-items: center;
  justify-content: start;
  display: flex;
  box-shadow: 4px 4px 24px rgba(1, 17, 38, 0.2);
  border-radius: 8px;
  padding: 10px;
  flex-direction: column;
  width: 80px;
  height: 120px;
  align-items: center;

  @media ${devices.mobileM} {
    margin-bottom: 10px;
  }
`

export const PokemonSelectedStats = styles.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 3px solid white;
  width: 50px;
  height:50px;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 10px;

`

export const PokemonSelectedStatsName = styles.div`
  border-radius: 100%;
  font-weight: 200;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
`