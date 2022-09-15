import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '@/assets/images/cyclone.svg';

import { Wrapper } from './LeftSide.styled';

function LeftSide() {
  const location = useLocation();
  const [content, setContent] = useState('default');

  useEffect(() => {
    if (location.pathname === '/projects') {
      setContent('project-side');
    } else if (location.pathname === '/blog') {
      setContent('blog-side');
    }
  }, [location]);

  return (
    <Wrapper>
      <Logo className="logo" />
    </Wrapper>
  );
}

export default LeftSide;
