import React, { useState } from 'react';
import { ReactComponent as ChevronDown } from '@/assets/images/chevron.svg';

import * as S from './DropDownBtn.styled';

function DropDownBtn({ isOpen, toggle }) {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(prevState => !prevState);

  return (
    <S.Btn className={isOpen ? 'open' : ''} onClick={toggle}>
      <ChevronDown />
    </S.Btn>
  );
}

export default DropDownBtn;
