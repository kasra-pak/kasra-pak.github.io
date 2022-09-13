import React from 'react';
import { SocialLinks } from './Footer.styled';

import { ReactComponent as EmailLogo } from '@/assets/images/email.svg';
import { ReactComponent as GithubLogo } from '@/assets/images/github.svg';
import { ReactComponent as LinkedinLogo } from '@/assets/images/linkedin.svg';
import { ReactComponent as TelegramLogo } from '@/assets/images/telegram.svg';
import { ReactComponent as WhatsAppLogo } from '@/assets/images/whatsapp.svg';

function Footer() {
  return (
    <footer>
      <SocialLinks>
        <li className="email">
          <span>kasrapak69@gmail.com</span>
          <EmailLogo />
        </li>
        <li>
          <a href="/">
            <GithubLogo />
          </a>
        </li>
        <li>
          <a href="/">
            <LinkedinLogo />
          </a>
        </li>
        <li>
          <a href="/">
            <TelegramLogo />
          </a>
        </li>
        <li>
          <a href="/">
            <WhatsAppLogo />
          </a>
        </li>
      </SocialLinks>
    </footer>
  );
}

export default Footer;
