import { createBrowserRouter } from 'react-router';
import App from './App.jsx';
import useStore from './store';

const About = () => {
 const { count, increment, decrement } = useStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
]);
