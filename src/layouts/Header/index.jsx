import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as MoonLogo } from '@/assets/images/moon.svg';

import { Wrapper, Name, Navbar, List, ListItem } from './Header.styled';

function Header() {
  return (
    <Wrapper>
      <Name>
        <Link to="/">
          kasra<span> pak eteghad</span>
        </Link>
      </Name>
      <Navbar>
        <List>
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
      </Navbar>
    </Wrapper>
  );
}

export default Header;
