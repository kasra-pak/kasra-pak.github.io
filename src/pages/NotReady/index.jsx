import React from 'react';

import Button from '@/components/Button';

import { Wrapper, Title, Subtitle } from './NotReady.styled';
import { Link } from 'react-router-dom';

function NotReady() {
  return (
    <Wrapper>
      <div>
        <Title>
          Oooops!
          <br />
          you came here sooon
        </Title>
        <Subtitle>This page might be available on your next visit, but for now We suggest you back to home.</Subtitle>
        <Link to="/">
          <Button type="button" variant="contained" color="blue" elevated>
            go home
          </Button>
        </Link>
      </div>
      {/* <div class="right-side">Right Side</div> */}
    </Wrapper>
  );
}

export default NotReady;
