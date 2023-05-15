import React from 'react';
import { ModalWrapper, ModalContent, CloseButton, ModalCloseWrap } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <ModalWrapper isopen={isOpen.toString()}>
      <ModalCloseWrap onClick={handleClose} />
      <ModalContent>
        <CloseButton onClick={handleClose}>X</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
