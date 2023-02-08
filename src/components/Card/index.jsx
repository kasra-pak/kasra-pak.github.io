import React, { useState } from 'react';
import DropDownBtn from '@/components/DropDownBtn';
import List from '@/components/List';
import Button from '@/components/Button';
import { ReactComponent as Check } from '@/assets/images/check.svg';

import * as S from './Card.styled';

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
    <S.Wrapper>
      <S.Header>
        <S.Title selectMode={isDropDownOpen}>{currentData.title}</S.Title>
        <DropDownBtn isOpen={isDropDownOpen} toggle={toggleDropDown} />
      </S.Header>

      <S.Container>
        <S.DropDownContainer isOpen={isDropDownOpen}>
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
        </S.DropDownContainer>
        <S.Content isHidden={isDropDownOpen}>
          <S.Technologies>
            {currentData.techs.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </S.Technologies>
          <S.Description>{currentData.desc}</S.Description>
          <S.Features>
            {currentData.features.map((feature, idx) => (
              <li key={idx}>
                <Check />
                <p>{feature}</p>
              </li>
            ))}
          </S.Features>
        </S.Content>
        <S.Footer isHidden={isDropDownOpen}>
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
        </S.Footer>
      </S.Container>
    </S.Wrapper>
  );
}

export default Card;
