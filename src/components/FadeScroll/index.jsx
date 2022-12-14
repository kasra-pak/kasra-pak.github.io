import React, { useState, useEffect } from 'react';

import { Wrapper } from './FadeScroll.styled';

function FadeScroll({ children }) {
  const [fadeStatus, setFadeStatus] = useState(null);

  useEffect(() => {
    checkHorizontalFade();
    window.addEventListener('resize', checkHorizontalFade);
    children.ref.current.addEventListener('scroll', checkHorizontalFade);
  }, []);

  const checkHorizontalFade = () => {
    const childRef = children.ref.current;
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
  };

  return <Wrapper fade={fadeStatus}>{children}</Wrapper>;
}

export default FadeScroll;
