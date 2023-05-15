import styles from 'styled-components'
import { devices } from '@styles/media';


export const ErrorPageWrap = styles.div`
  width: 100vw;
  height: 100vh;
  background: #d93e30;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

export const ErrorTitle = styles.div`
  z-index: 1;
  font-weight: 700;
  font-size: 700px;
  line-height: 700px;
  letter-spacing: 4px;
  color: rgba(0, 0, 0, 0.5);

  @media ${devices.mediaXXL} {
    font-size: 500px;
    line-height: 500px;
  }

  @media ${devices.mobileL} {
    font-size: 400px;
    line-height: 400px;
  }

  @media ${devices.mobileM} {
    font-size: 180px;
    line-height: 200px;
  }
  @media ${devices.mobileS} {
    font-size: 150px;
    line-height: 200px;
  }
`

export const ErrorTextWrap = styles.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 80px;
  align-items: center;
  justify-content: center;

  @media ${devices.mobileL} {
    margin-top: 100px;
  }
`

export const ErrorTextWhite = styles.span`
  font-weight: 700;
  font-size: 48px;
  z-index: 3;
  color: #f2f2f2;
  padding-right: 10px;


  @media ${devices.mediaL} {
    font-size: 36px;
  }
  @media ${devices.mobileM} {
    font-size: 24px;
  }
  @media ${devices.mobileS} {
    padding-right: 0px;
  }
`

export const ErroTextBlack = styles.span`
  font-weight: 700;
  font-size: 48px;
  z-index: 3;
  color: black;
  @media ${devices.mediaL} {
    font-size: 36px;
  }
  @media ${devices.mobileM} {
    font-size: 24px;
  }
`
export const ErrorBtn = styles.div`
  cursor: pointer;
  color: black;
  padding: 17px 80px 22px;
  background: #f2cb07;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
`
export const ErrorImg = styles.img`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-46%, -60%);
  height: 623px;
  width: 690px;

  @media ${devices.mediaL} {
    height: 400px;
    width: 440px;
    transform: translate(-46%, -80%);
  }

  @media ${devices.mobileM} {
    height: 300px;
    width: 340px;
    transform: translate(-46%, -100%);
  }

  @media ${devices.mobileS} {
    height: 200px;
    width: 240px;
  }
`