import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { ReactComponent as CycloneImg } from '@/assets/images/cyclone.svg';

import * as S from './NotFound.styled';

function NotFound() {
  return (
    <S.Wrapper>
      <S.Overlay>
        <S.Content>
          <S.Title>
            <S.Status>
              <span>4</span>
              <CycloneImg />
              <span>4</span>
            </S.Status>
            oooops!
            <br />
            page not found
          </S.Title>
          <S.Subtitle>
            This page doesn&apos;t exist or was removed!
            <br />
            We suggest you back to home.
          </S.Subtitle>
          <Link to="/">
            <Button type="button" variant="contained" color="white">
              back to home
            </Button>
          </Link>
        </S.Content>
      </S.Overlay>
    </S.Wrapper>
  );
}

export default NotFound;
