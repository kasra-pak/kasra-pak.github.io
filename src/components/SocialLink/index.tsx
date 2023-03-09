import { AnchorHTMLAttributes } from 'react';

import * as S from './SocialLink.styled';

interface SocialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function SocialLink({ href, target, rel, children }: SocialLinkProps) {
  return (
    <S.Wrapper>
      <a href={href} target={target} rel={rel}>
        {children}
      </a>
    </S.Wrapper>
  );
}

export default SocialLink;
