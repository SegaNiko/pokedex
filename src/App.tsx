import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

import { ErrorPage } from '@components';
import { Pokedex } from '@pages';

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<Pokedex />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
