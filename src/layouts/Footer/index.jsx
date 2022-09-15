import React from 'react';
import { ReactComponent as EmailLogo } from '@/assets/images/email.svg';
import { ReactComponent as GithubLogo } from '@/assets/images/github.svg';
import { ReactComponent as LinkedinLogo } from '@/assets/images/linkedin.svg';
import { ReactComponent as TelegramLogo } from '@/assets/images/telegram.svg';
import { ReactComponent as WhatsAppLogo } from '@/assets/images/whatsapp.svg';

import { SocialLinks } from './Footer.styled';

function Footer() {
  return (
    <footer>
      <SocialLinks>
        <li className="email">
          <span>kasrapak69@gmail.com</span>
          <EmailLogo />
        </li>
        <li>
          <a href="https://github.com/kasra-pak" target="_blank" rel="noreferrer">
            <GithubLogo />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kasra-pak" target="_blank" rel="noreferrer">
            <LinkedinLogo />
          </a>
        </li>
        <li>
          <a href="https://t.me/kasra_pak" target="_blank" rel="noreferrer">
            <TelegramLogo />
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noreferrer">
            <WhatsAppLogo />
          </a>
        </li>
      </SocialLinks>
    </footer>
  );
}

export default Footer;