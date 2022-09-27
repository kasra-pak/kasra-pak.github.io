import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@/routes';

import GlobalStyle from '@/assets/Styles/globalStyles';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
