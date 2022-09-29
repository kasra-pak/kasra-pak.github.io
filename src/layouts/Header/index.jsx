import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FadeScroll from '@/components/FadeScroll';
import { ReactComponent as MoonLogo } from '@/assets/images/moon.svg';

import { Wrapper, Name, Navbar, List, ListItem } from './Header.styled';

function Header() {
  const nodeRef = useRef(null);

  return (
    <Wrapper>
      <Name>
        <Link to="/">
          kasra<span> pak eteghad</span>
        </Link>
      </Name>
      <Navbar>
        <FadeScroll>
          <List ref={nodeRef}>
            <ListItem>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                blog
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                projects
              </NavLink>
            </ListItem>
            <ListItem className="moon">
              <button>
                <MoonLogo />
              </button>
            </ListItem>
          </List>
        </FadeScroll>
      </Navbar>
    </Wrapper>
  );
}

export default Header;
