import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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

  return <aside>{content}</aside>;
}

export default LeftSide;
