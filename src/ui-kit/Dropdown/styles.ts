import styled from 'styled-components';

interface DropdownWrapperProps {
  isOpen: boolean
}

export const DropdownWrapper = styled.div<DropdownWrapperProps>`
  position: relative;
  display: inline-block;
  background: #ffffff6b;
  border-radius: ${({ isOpen }) => isOpen ? '20px 20px 0 0' : '20px'};
  width: 200px;
  border: none;
  font-weight: 300;
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;

`;

export const DropdownMenu = styled.div`
  position: absolute;
  padding-top: 1%;
  top: 99%;
  left: 0;
  z-index: 1;
  min-width: 100%;
  max-height: 150px;
  overflow-y: auto;
  background-color: #ffffffe6;
  border: none;
  border-radius: 0 0 20px 20px;
`;

export const OptionItem = styled.div`
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #ffffff6b;
  }
`;
