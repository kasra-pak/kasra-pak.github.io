import React, { useState } from 'react';
import Card from '@/components/Card';
import List from '@/components/List';
import data from '@/data/projects.json';

import * as S from './Projects.styled';

function Projects() {
  const [currentProjectId, setCurrentProjectId] = useState('2');

  const selectItem = id => {
    setCurrentProjectId(id);
  };

  return (
    <S.Wrapper>
      <Card data={data} currentId={currentProjectId} setCurrentId={setCurrentProjectId} />
      <S.ProjectsListContainer>
        <h2>projects list</h2>
        <List>
          {data.map(item => (
            <li
              key={item.id}
              className={item.id === currentProjectId ? 'active' : ''}
              onClick={() => selectItem(item.id)}
              onKeyDown={() => selectItem(item.id)}
              role="option"
              aria-selected={item.id === currentProjectId}
            >
              {item.title}
            </li>
          ))}
        </List>
      </S.ProjectsListContainer>
    </S.Wrapper>
  );
}

export default Projects;
