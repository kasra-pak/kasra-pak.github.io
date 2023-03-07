import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from 'styled-components';

import { lightTheme } from '@/assets/theme';
import router from '@/routes';

import GlobalStyle from '@/assets/Styles/globalStyles';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeContext.Provider value={{ setTheme }}>
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
    </ThemeContext.Provider>
  );
}

export default App;
