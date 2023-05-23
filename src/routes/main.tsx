import React, { createRef } from 'react';

import Page from '@/layouts/Page';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Blog from '@/pages/Blog';
import Post from '@/pages/Post';
import NotReady from '@/pages/NotReady';

const routes = [
  { path: '/', element: <Home />, nodeRef: createRef<HTMLDivElement>() },
  {
    path: '/projects',
    element: <Projects />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/blog',
    element: <NotReady />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/post/:postId',
    element: <Post />,
    nodeRef: createRef<HTMLDivElement>(),
  },
];

const main = {
  path: '/',
  element: <Page />,
  children: routes.map(route => ({
    index: route.path === '/',
    path: route.path === '/' ? undefined : route.path,
    element: route.element,
  })),
};

export { main, routes };
