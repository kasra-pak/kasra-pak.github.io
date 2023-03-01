import React from 'react';

import { ReactComponent as SearchSVG } from '@/assets/images/search.svg';
import * as S from './SearchBar.styled';

const SearchBar = () => {
  return (
    <S.Wrapper>
      <S.SearchBtn>
        <SearchSVG />
      </S.SearchBtn>
      <S.Input type="search" placeholder="Search by Title" />
    </S.Wrapper>
  );
};

export default SearchBar;
