import { createBrowserRouter } from 'react-router';
import App from './App.jsx';

const About = () => <>About</>;

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
]);
