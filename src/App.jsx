import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page from '@/layouts/Page';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import NotReady from '@/pages/NotReady';
import NotFound from '@/pages/NotFound';

import GlobalStyle from '@/assets/Styles/globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
