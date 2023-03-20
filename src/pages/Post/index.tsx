import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import data from '@/data/blogPosts.json';
import { ReactComponent as ShareSVG } from '@/assets/images/share.svg';
import * as S from './Post.styled';

const Post = () => {
  const { postId } = useParams();
  const post = data.find(post => post.id === postId);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (post?.contentPath) {
      import(/* @vite-ignore */ post.contentPath).then(module => {
        setContent(module.default);
      });
    }
  }, []);

  return (
    <S.Wrapper>
      <article>
        <S.Flex>
          <S.Date>{post?.date}</S.Date>
          <S.Divider />
          <S.Duration>{post?.duration} min read</S.Duration>
          <S.ShareBtn>
            <ShareSVG />
          </S.ShareBtn>
        </S.Flex>
        <S.Title>{post?.title}</S.Title>
        <S.Topics>
          {post?.topics.map((topic, idx) => (
            <li key={idx}>{topic}</li>
          ))}
        </S.Topics>
        <S.PostContent>{content}</S.PostContent>
      </article>
    </S.Wrapper>
  );
};

export default Post;
