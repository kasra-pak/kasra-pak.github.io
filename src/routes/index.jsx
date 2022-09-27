import { createBrowserRouter } from 'react-router-dom';
import { main } from './main';
import { noMatch } from './noMatch';

const router = createBrowserRouter([main, noMatch]);

export default router;
