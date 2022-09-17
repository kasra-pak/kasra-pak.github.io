import React, { useState } from 'react';
import DropDownBtn from '@/components/DropDownBtn';
import List from '@/components/List';
import Button from '@/components/Button';
import { ReactComponent as Check } from '@/assets/images/check.svg';

import {
  Wrapper,
  Header,
  Title,
  Container,
  DropDownContainer,
  Content,
  Technologies,
  Description,
  Features,
  Footer,
} from './Card.styled';

function Card() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(prevState => !prevState);
  };

  return (
    <Wrapper>
      <Header>
        <Title>rest countries api</Title>
        <DropDownBtn isOpen={isDropDownOpen} toggle={toggleDropDown} />
      </Header>

      <Container>
        <DropDownContainer isOpen={isDropDownOpen}>
          <List>
            <li>space tourism</li>
            <li>movie database</li>
            <li>rest countries api</li>
            <li>fylo landing page</li>
          </List>
        </DropDownContainer>
        <Content isHidden={isDropDownOpen}>
          <Technologies>
            <li>html</li>
            <li>css</li>
            <li>react</li>
          </Technologies>
          <Description>Integrates with the REST Countries API to pull country data and display it.</Description>
          <Features>
            <li>
              <Check />
              <p>search</p>
            </li>
            <li>
              <Check />
              <p>filter search results</p>
            </li>
            <li>
              <Check />
              <p>detailed information</p>
            </li>
            <li>
              <Check />
              <p>dark mode toggle</p>
            </li>
          </Features>
        </Content>
        <Footer isHidden={isDropDownOpen}>
          <Button variant="contained" color="black">
            live site
          </Button>
          <Button variant="outlined" color="black">
            view code
          </Button>
        </Footer>
      </Container>
    </Wrapper>
  );
}

export default Card;
