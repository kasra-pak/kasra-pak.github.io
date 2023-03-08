import React, { useState } from 'react';
import { ReactComponent as ChevronDown } from '@/assets/images/chevron.svg';

import * as S from './DropDownBtn.styled';

interface DropDownBtnProps {
  isOpen: boolean;
  toggle: () => void;
}

function DropDownBtn({ isOpen, toggle }: DropDownBtnProps) {
  return (
    <S.Btn className={isOpen ? 'open' : ''} onClick={toggle}>
      <ChevronDown />
    </S.Btn>
  );
}

export default DropDownBtn;
