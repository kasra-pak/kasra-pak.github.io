import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import {
  transitionDelay,
  transitionClassName,
  PageTransitionContainer,
} from '@/assets/Styles/pageTransition';

import LeftSide from '@/layouts/LeftSide';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import { routes } from '@/routes/main';

import * as S from './Page.styled';

function PageLayout() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  const nodeRef = routes.find(
    route => route.path === location.pathname,
  )?.nodeRef;

  return (
    <S.Wrapper>
      <LeftSide />
      <S.Content>
        <Header />

        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={transitionDelay}
            classNames={transitionClassName}
            unmountOnExit
          >
            {() => (
              <PageTransitionContainer ref={nodeRef}>
                {currentOutlet}
              </PageTransitionContainer>
            )}
          </CSSTransition>
        </SwitchTransition>

        <Footer />
      </S.Content>
    </S.Wrapper>
  );
}

export default PageLayout;
