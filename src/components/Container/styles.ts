import styles from 'styled-components'
import { devices } from "@styles/media";

export const StylesContainer = styles.div`
  max-width: 80%;
  margin: 0 auto;

  @media ${devices.mediaXL} {
    max-width: 80%;
  }

  @media ${devices.mediaL} {
    max-width: 90%;
  }

  @media ${devices.mobileL} {
    margin: 0 auto;
    padding: 0 20px;
  }

  @media ${devices.mobileM} {
    padding: 0 15px;
  }

  @media ${devices.mobileS} {
    padding: 0 10px;
  }
`
