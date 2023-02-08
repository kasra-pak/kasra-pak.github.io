import React from 'react';
import Email from '@/components/Email';
import SocialLink from '@/components/SocialLink';

import { ReactComponent as GithubLogo } from '@/assets/images/github.svg';
import { ReactComponent as LinkedinLogo } from '@/assets/images/linkedin.svg';
import { ReactComponent as TelegramLogo } from '@/assets/images/telegram.svg';
import { ReactComponent as WhatsAppLogo } from '@/assets/images/whatsapp.svg';

import { SocialLinks } from './Footer.styled';

function Footer() {
  return (
    <footer>
      <SocialLinks>
        {/* <li>
          <Email />
        </li> */}

        <SocialLink href="mailto:kasrapak69@gmail.com">
          <Email>kasrapak69@gmail.com</Email>
        </SocialLink>

        <SocialLink href="https://github.com/kasra-pak" target="_blank" rel="noreferrer">
          <GithubLogo />
        </SocialLink>

        <SocialLink href="https://www.linkedin.com/in/kasra-pak" target="_blank" rel="noreferrer">
          <LinkedinLogo />
        </SocialLink>

        <SocialLink href="https://t.me/kasra_pak" target="_blank" rel="noreferrer">
          <TelegramLogo />
        </SocialLink>

        {/* <SocialLink href="" target="_blank" rel="noreferrer">
          <WhatsAppLogo />
        </SocialLink> */}
      </SocialLinks>
    </footer>
  );
}

export default Footer;
