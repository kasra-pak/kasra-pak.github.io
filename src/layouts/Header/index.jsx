import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Wrapper, Name, Navbar, List, ListItem } from './Header.styled';
import { ReactComponent as MoonLogo } from '@/assets/images/moon.svg';

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
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/blog">
              blog
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/projects">
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
