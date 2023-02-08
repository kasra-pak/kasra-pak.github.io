import React from 'react';

import * as S from './List.styled';

function List({ children }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export default List;
