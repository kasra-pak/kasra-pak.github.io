import React, { createRef } from 'react';

import Page from '@/layouts/Page';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Blog from '@/pages/Blog';

const routes = [
  { path: '/', element: <Home />, nodeRef: createRef() },
  { path: '/projects', element: <Projects />, nodeRef: createRef() },
  { path: '/blog', element: <Blog />, nodeRef: createRef() },
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
