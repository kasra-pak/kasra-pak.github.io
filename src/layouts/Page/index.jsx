import React from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { transitionDelay, PageTransitionContainer } from '@/assets/Styles/pageTransition';

import LeftSide from '@/layouts/LeftSide';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import { routes } from '@/routes/main';

import * as S from './Page.styled';

function PageLayout() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  const { nodeRef } = routes.find(route => route.path === location.pathname) ?? {};

  return (
    <S.Wrapper>
      <LeftSide />
      <S.Content>
        <Header />
        <PageTransitionContainer>
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={transitionDelay}
              classNames="page-transition"
              unmountOnExit
            >
              {() => <div ref={nodeRef}>{currentOutlet}</div>}
            </CSSTransition>
          </SwitchTransition>
        </PageTransitionContainer>
        <Footer />
      </S.Content>
    </S.Wrapper>
  );
}

export default PageLayout;
