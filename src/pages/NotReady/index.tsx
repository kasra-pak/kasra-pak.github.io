import React from 'react';

import Button from '@/components/Button';

import * as S from './NotReady.styled';
import { Link } from 'react-router-dom';

function NotReady() {
  return (
    <S.Wrapper>
      <div>
        <S.Title>
          Oooops!
          <br />
          you came here sooon
        </S.Title>
        <S.Subtitle>
          This page might be available on your next visit, but for now We
          suggest you back to home.
        </S.Subtitle>
        <Link to="/">
          <Button type="button" variant="contained" color="blue" elevated>
            go home
          </Button>
        </Link>
      </div>
      {/* <div class="right-side">Right Side</div> */}
    </S.Wrapper>
  );
}

export default NotReady;
