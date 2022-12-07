import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Showcase, { loader as componentLoader } from './pages/Showcase';
import Home, { loader as rootLoader } from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Index from './components/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: '/:component',
            element: <Showcase />,
            loader: componentLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
