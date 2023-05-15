import styled from 'styled-components';
import { devices } from '@styles/media';

export const ModalWrapper = styled.div<{ isopen: string }>`
  display: ${({ isopen }) => isopen === 'true' ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  `;

export const ModalContent = styled.div`
  z-index: 1000;
  background-color: #000000c2;
  border-radius: 20px;
  padding: 16px;
  position: relative;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  left: 8px;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  z-index: 3;

  @media ${devices.mobileL} {
    font-size: 20px;
  }

  @media ${devices.mobileM} {
    font-size: 25px;
    top: 15px;
    left: 15px;
  }
`;

export const ModalCloseWrap = styled.div`
  width: 100%;
  height: 100%;
  position:absolute;
  top: 0;
  left: 0;
`
