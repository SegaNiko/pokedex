import styles from 'styled-components';
import { devices } from '@styles/media';

interface ButtonProps {
  disabled?: boolean;
}

export const PokedexWrap = styles.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  color: white;
  margin-top: 20px ;

 @media ${devices.mobileM} {
  justify-content: center;
  }

`

export const PokedexBtnWrap = styles.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`

export const PokedexBtn = styles.button<ButtonProps>`
  cursor: pointer;
  color: black;
  padding: 15px 50px 17px;
  background: ${(props) => (props.disabled ? '#b2960a' : '#f2cb07')};

  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  width: fit-content;
  border-radius: 11px;
  border: 0px;
  font-size: 25px;
  font-weight: 300;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:disabled {
    background: #;
    color: #666;
    cursor: not-allowed;
  }
`

export const PokedexDropdownWrap = styles.div`
  margin: 20px auto 0;
  width: fit-content;
`

export const PokedexNoMutch = styles.div`
  margin: 0 auto;
  color: black;
  font-weight: 300;
  font-size: 50px;
`