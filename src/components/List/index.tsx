import { ReactNode } from 'react';

import * as S from './List.styled';

interface ListProps {
  children: ReactNode;
}

function List({ children }: ListProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export default List;
