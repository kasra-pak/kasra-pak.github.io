import React from 'react';
import NotFound from '@/pages/NotFound';
import GlobalStyle from '@/assets/Styles/globalStyles';

const noMatch = {
  path: '*',
  element: (
    <>
      <GlobalStyle notFound />
      <NotFound />
    </>
  ),
};

export { noMatch };
