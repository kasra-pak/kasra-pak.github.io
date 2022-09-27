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

function Card({ data, currentId, setCurrentId }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const currentData = data.find(item => item.id === currentId);

  const toggleDropDown = () => {
    setIsDropDownOpen(prevState => !prevState);
  };

  const selectItem = id => {
    setCurrentId(id);
    setIsDropDownOpen(false);
  };

  return (
    <Wrapper>
      <Header>
        <Title selectMode={isDropDownOpen}>{currentData.title}</Title>
        <DropDownBtn isOpen={isDropDownOpen} toggle={toggleDropDown} />
      </Header>

      <Container>
        <DropDownContainer isOpen={isDropDownOpen}>
          <List>
            {data.map(item => (
              <li
                key={item.id}
                className={item.id === currentId ? 'active' : ''}
                onClick={() => selectItem(item.id)}
                onKeyDown={() => selectItem(item.id)}
                role="option"
                aria-selected={item.id === currentId}
              >
                {item.title}
              </li>
            ))}
          </List>
        </DropDownContainer>
        <Content isHidden={isDropDownOpen}>
          <Technologies>
            {currentData.techs.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </Technologies>
          <Description>{currentData.desc}</Description>
          <Features>
            {currentData.features.map((feature, idx) => (
              <li key={idx}>
                <Check />
                <p>{feature}</p>
              </li>
            ))}
          </Features>
        </Content>
        <Footer isHidden={isDropDownOpen}>
          <a href={currentData.url} target="_blank" rel="noreferrer">
            <Button variant="contained" color="black" disabled={!currentData.url}>
              live site
            </Button>
          </a>
          <a href={currentData.repository} target="_blank" rel="noreferrer">
            <Button variant="outlined" color="black" disabled={!currentData.repository}>
              view code
            </Button>
          </a>
        </Footer>
      </Container>
    </Wrapper>
  );
}

export default Card;
