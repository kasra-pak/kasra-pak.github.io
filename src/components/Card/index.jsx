import React, { useState, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import DropDownBtn from '@/components/DropDownBtn';
import List from '@/components/List';
import Button from '@/components/Button';
import { ReactComponent as Check } from '@/assets/images/check.svg';

import * as S from './Card.styled';

function Card({ data, currentId, setCurrentId }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const titleRef = useRef();
  const contentRef = useRef();
  const liveSiteRef = useRef();
  const sourceCodeRef = useRef();

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
        <SwitchTransition>
          <CSSTransition key={currentId} nodeRef={titleRef} classNames="fade" timeout={200}>
            <S.Title ref={titleRef} selectMode={isDropDownOpen}>
              {currentData.title}
            </S.Title>
          </CSSTransition>
        </SwitchTransition>
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
        <SwitchTransition>
          <CSSTransition key={currentId} nodeRef={contentRef} classNames="fade" timeout={200}>
            <S.Content ref={contentRef} isHidden={isDropDownOpen}>
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
          </CSSTransition>
        </SwitchTransition>
        <S.Footer isHidden={isDropDownOpen}>
          <SwitchTransition>
            <CSSTransition key={currentId} nodeRef={liveSiteRef} classNames="fade" timeout={200}>
              <a ref={liveSiteRef} href={currentData.url} target="_blank" rel="noreferrer">
                <Button variant="contained" color="black" disabled={!currentData.url}>
                  live site
                </Button>
              </a>
            </CSSTransition>
          </SwitchTransition>
          <SwitchTransition>
            <CSSTransition key={currentId} nodeRef={sourceCodeRef} classNames="fade" timeout={200}>
              <a ref={sourceCodeRef} href={currentData.repository} target="_blank" rel="noreferrer">
                <Button variant="outlined" color="black" disabled={!currentData.repository}>
                  view code
                </Button>
              </a>
            </CSSTransition>
          </SwitchTransition>
        </S.Footer>
      </S.Container>
    </S.Wrapper>
  );
}

export default Card;
