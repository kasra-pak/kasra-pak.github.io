import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useThemeToggle } from '@/contexts/ThemeToggle';

import router from '@/routes';

import GlobalStyle from '@/assets/Styles/globalStyles';

function App() {
  const { theme } = useThemeToggle();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      {/* <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<NotReady />} />
          </Route>
          <Route
          path="*"
          element={
            <>
              <GlobalStyle notFound />
              <NotFound />
              </>
            }
          />
        </Routes> */}
    </ThemeProvider>
  );
}

export default App;
