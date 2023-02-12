import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { lightTheme, darkTheme } from '@/assets/theme';
import FadeScroll from '@/components/FadeScroll';
import { ReactComponent as MoonLogo } from '@/assets/images/moon.svg';

import * as S from './Header.styled';
import { ThemeContext, useTheme } from 'styled-components';

function Header() {
  const nodeRef = useRef(null);
  const sth = useTheme(ThemeContext);

  const toggleTheme = () => {
    sth.setTheme(prevTheme => (prevTheme.name === 'light' ? darkTheme : lightTheme));
  };

  return (
    <S.Wrapper>
      <S.Name>
        <Link to="/">
          kasra<span> pak eteghad</span>
        </Link>
      </S.Name>
      <S.Navbar>
        <FadeScroll>
          <S.List ref={nodeRef}>
            <S.ListItem>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                blog
              </NavLink>
            </S.ListItem>
            <S.ListItem>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                projects
              </NavLink>
            </S.ListItem>
            <S.ListItem className="moon">
              <S.ThemeToggler onClick={toggleTheme}>
                <MoonLogo />
              </S.ThemeToggler>
            </S.ListItem>
          </S.List>
        </FadeScroll>
      </S.Navbar>
    </S.Wrapper>
  );
}

export default Header;
