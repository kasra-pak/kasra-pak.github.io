import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from '@/layouts/LeftSide';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

import { Wrapper, Content } from './Page.styled';

function PageLayout() {
  return (
    <Wrapper>
      <LeftSide />
      <Content>
        <Header />
        <Outlet />
        <Footer />
      </Content>
    </Wrapper>
  );
}

export default PageLayout;
