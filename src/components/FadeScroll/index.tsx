import React, { useState, useEffect } from 'react';

import * as S from './FadeScroll.styled';

interface FadeScrollProps {
  // Should be typed as "ReactElement" which has a ref property;
  // But for now i just type it as "any"
  children: any;
}

function FadeScroll({ children }: FadeScrollProps) {
  const [fadeStatus, setFadeStatus] = useState<FadeStatus>(null);

  useEffect(() => {
    checkHorizontalFade();
    window.addEventListener('resize', checkHorizontalFade);
    children.ref.current.addEventListener('scroll', checkHorizontalFade);
  }, []);

  const checkHorizontalFade = () => {
    const childRef = children.ref.current;

    if (childRef !== null) {
      const overflow = childRef.clientWidth < childRef.scrollWidth;
      const scrollAtStart = childRef.scrollLeft === 0;
      const scrollAtEnd = childRef.scrollLeft === childRef.scrollLeftMax;

      if (overflow) {
        if (scrollAtStart) {
          setFadeStatus('fade-right');
        } else if (scrollAtEnd) {
          setFadeStatus('fade-left');
        } else {
          setFadeStatus('fade-both');
        }
      } else {
        setFadeStatus(null);
      }
    }
  };

  return <S.Wrapper fade={fadeStatus}>{children}</S.Wrapper>;
}

export default FadeScroll;
