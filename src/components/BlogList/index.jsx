import React from 'react';

import data from '@/data/blogPosts.json';
import BlogPostCard from '@/components/BlogPostCard';

import * as S from './BlogList.styled';

const BlogList = () => {
  return (
    <S.Wrapper>
      {data.map(post => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </S.Wrapper>
  );
};

export default BlogList;
