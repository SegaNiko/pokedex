import React, { useState } from 'react';

import { DropdownHeader, DropdownMenu, DropdownWrapper, OptionItem } from './styles';
import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';

interface Option {
  name: string;
  url?: string;
}

interface DropdownProps {
  options: Option[];
  selectedType: string;
  onChange: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, onChange, selectedType }) => {
  const [selectedValue, setSelectedValue] = useState<string>(selectedType);
  const allOptions: Option[] = [{ name: 'all' }, ...options];

  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setIsOpen(false);
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <DropdownWrapper isopen={isOpen.toString()}>
      <DropdownHeader onClick={handleHeaderClick}>{capitalizeFirstLetter(selectedValue)}</DropdownHeader>
      {isOpen && (
        <DropdownMenu>
          {allOptions.map(option => (
            <OptionItem key={option.name} onClick={() => handleOptionClick(option.name)}>
              {capitalizeFirstLetter(option.name)}
            </OptionItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
