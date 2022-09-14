import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import NotReady from '@/pages/NotReady';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<NotReady />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
<div>
  <aside>left side</aside>
  <div>
    <header>
      <nav>navbar</nav>
    </header>
    <Outlet />
    <footer>footer</footer>
  </div>
</div>;
