import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '@/App';
import GlobalStyle from '@/assets/Styles/globalStyles';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import NotReady from '@/pages/NotReady';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<NotReady />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
