import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ShareSVG } from '@/assets/images/share.svg';

import * as S from './BlogPostCard.styled';

const BlogPostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
      <S.Wrapper>
        <S.Header>
          <S.Topics>
            {post.topics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </S.Topics>
          <S.ShareBtn>
            <ShareSVG />
          </S.ShareBtn>
        </S.Header>
        <S.Title>{post.title}</S.Title>
        <S.Content>{post.content}</S.Content>
        <S.Divider />
        <S.Footer>
          <S.Date>{post.date}</S.Date>
          <S.Duration>{post.duration} min read</S.Duration>
        </S.Footer>
      </S.Wrapper>
    </Link>
  );
};

export default BlogPostCard;
