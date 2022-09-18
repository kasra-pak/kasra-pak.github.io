import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { ReactComponent as CycloneImg } from '@/assets/images/cyclone.svg';

import { Wrapper, Overlay, Content, Title, Status, Subtitle } from './NotFound.styled';

function NotFound() {
  return (
    <Wrapper>
      <Overlay>
        <Content>
          <Title>
            <Status>
              <span>4</span>
              <CycloneImg />
              <span>4</span>
            </Status>
            oooops!
            <br />
            page not found
          </Title>
          <Subtitle>
            This page doesn&apos;t exist or was removed!
            <br />
            We suggest you back to home.
          </Subtitle>
          <Link to="/">
            <Button type="button" variant="contained" color="white">
              back to home
            </Button>
          </Link>
        </Content>
      </Overlay>
    </Wrapper>
  );
}

export default NotFound;
