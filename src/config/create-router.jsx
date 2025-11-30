import { createBrowserRouter, redirect } from 'react-router-dom';
import Ex03Page from '@/pages/exercise-3/ex-03';
import Ex03StartPage from '@/pages/exercise-3/ex-03-start';
import Ex03bPage from '@/pages/exercise-3/ex-03b';
import Ex03bStartPage from '@/pages/exercise-3/ex-03b-start';
import LandingPage from '@/pages/landing';
import Layout from '@/shared/layout';

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          loader() {
            return redirect('/landing');
          },
        },
        {
          path: 'landing',
          element: <LandingPage />,
        },
        // proti ergasia
        {
          path: 'ex-03-start',
          element: <Ex03StartPage />,
        },
        {
          path: 'ex-03',
          element: <Ex03Page />,
        },
        {
          path: 'ex-03b-start',
          element: <Ex03bStartPage />,
        },

        {
          path: 'ex-03b',
          element: <Ex03bPage />,
        },
      ],
    },
    {
      path: '*',
      loader() {
        return redirect('/');
      },
    },
  ]);
};
