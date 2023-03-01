import React, { useRef, useState } from 'react';
import FadeScroll from '../FadeScroll';
import { toggleElement } from '@/utils';

import * as S from './Topics.styled';

const Topics = () => {
  const [activeTopics, setActiveTopics] = useState([]);
  const ref = useRef();

  const handleClick = e => {
    const { value } = e.currentTarget.dataset;
    setActiveTopics(prevState => toggleElement(prevState, value));
  };

  return (
    <FadeScroll>
      <S.Wrapper ref={ref}>
        <li>
          <S.Item data-value="react" onClick={handleClick} active={activeTopics.includes('react')}>
            react
          </S.Item>
        </li>
        <li>
          <S.Item data-value="philosophy" onClick={handleClick} active={activeTopics.includes('philosophy')}>
            philosophy
          </S.Item>
        </li>
        <li>
          <S.Item data-value="javascript" onClick={handleClick} active={activeTopics.includes('javascript')}>
            javascript
          </S.Item>
        </li>
        <li>
          <S.Item data-value="css" onClick={handleClick} active={activeTopics.includes('css')}>
            css
          </S.Item>
        </li>
        <li>
          <S.Item data-value="life" onClick={handleClick} active={activeTopics.includes('life')}>
            life
          </S.Item>
        </li>
      </S.Wrapper>
    </FadeScroll>
  );
};

export default Topics;
