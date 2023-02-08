import React from 'react';

import { Wrapper } from './SocialLink.styled';

function SocialLink({ href, target, rel, children }) {
  return (
    <Wrapper>
      <a href={href} target={target} rel={rel}>
        {children}
      </a>
    </Wrapper>
  );
}

export default SocialLink;
