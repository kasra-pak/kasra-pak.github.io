import React, { useState } from 'react';
import { ReactComponent as ChevronDown } from '@/assets/images/chevron.svg';

import { Btn } from './DropDownBtn.styled';

function DropDownBtn() {
  const [isOpen, setIsOpen] = useState('false');

  const toggle = () => setIsOpen(prevState => !prevState);

  return (
    <Btn className={isOpen ? 'open' : ''} onClick={toggle}>
      <ChevronDown />
    </Btn>
  );
}

export default DropDownBtn;
