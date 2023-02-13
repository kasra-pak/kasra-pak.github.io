import React, { useState } from 'react';
import Card from '@/components/Card';
import List from '@/components/List';

import * as S from './Projects.styled';

const data = [
  {
    id: '2',
    title: 'fancy todo',
    desc: 'The classic todo app with a few twists!',
    techs: ['react', 'redux', 'styled-components'],
    features: ['drag & drop reordering', 'Data persist in local storage', 'dark/light theme toggle'],
    url: 'https://kasra-pak.github.io/fancy-todo/',
    repository: 'https://github.com/kasra-pak/fancy-todo',
    screenshots: [],
  },
  {
    id: '1',
    title: 'space tourism',
    desc: 'A multi-page website built from Figma designs.',
    techs: ['react', 'typescript', 'styled-components'],
    features: [],
    url: 'https://kasra-pak.github.io/space-tourism-website/',
    repository: 'https://github.com/kasra-pak/space-tourism-website',
    screenshots: [],
  },
  // {
  //   id: '5',
  //   title: 'movie database',
  //   desc: 'A website that provides recent information and details about movies, tv shows, etc. Uses The Movie DataBase (TMDB) API as a backbone.',
  //   techs: ['react', 'tailwind CSS', 'firebase', 'API'],
  //   features: ['login/logout', 'custom watchlist'],
  //   url: null,
  //   repository: 'https://github.com/kasra-pak/movie-db-website',
  //   screenshots: [],
  // },
  {
    id: '3',
    title: 'rest countries api',
    desc: 'Integrates with the REST Countries API to pull country data and display it.',
    techs: ['scss', 'react'],
    features: ['search', 'filter search results', 'detailed information', 'dark mode toggle'],
    url: 'https://kasra-pak.github.io/rest-countries-api-with-dark-theme/',
    repository: 'https://github.com/kasra-pak/rest-countries-api-with-dark-theme',
    screenshots: [],
  },
  {
    id: '4',
    title: 'fylo landing page',
    desc: 'Pixel perfect landing page',
    techs: ['html', 'scss', 'js'],
    features: ['Responsive flex-box and grid layouts', 'Mobile-first workflow'],
    url: 'https://kasra-pak.github.io/Fylo-dark-theme-landing-page/',
    repository: 'https://github.com/kasra-pak/Fylo-dark-theme-landing-page',
    screenshots: [],
  },
];

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
