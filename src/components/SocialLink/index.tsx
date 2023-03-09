import React, { AnchorHTMLAttributes } from 'react';

import * as S from './SocialLink.styled';

function SocialLink({
  href,
  target,
  rel,
  children,
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <S.Wrapper>
      <a href={href} target={target} rel={rel}>
        {children}
      </a>
    </S.Wrapper>
  );
}

export default SocialLink;
