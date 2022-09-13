import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <aside>left side</aside>
      <div>
        <header>
          <nav>navbar</nav>
        </header>
        <Outlet />
        <footer>footer</footer>
      </div>
    </div>
  );
}

export default App;
