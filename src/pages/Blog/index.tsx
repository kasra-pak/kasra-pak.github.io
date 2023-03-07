import React from 'react';
import SearchBar from '@/components/SearchBar';
import Topics from '@/components/Topics';
import BlogList from '@/components/BlogList';

import * as S from './Blog.styled';

const Blog = () => {
  return (
    <S.Wrapper>
      <SearchBar />
      <Topics />
      <BlogList />
    </S.Wrapper>
  );
};

export default Blog;
