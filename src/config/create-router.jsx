import { createBrowserRouter, redirect } from 'react-router-dom';
import Ex03StartPage from '@/pages/ex-03-start';
import LandingPage from '@/pages/landing';
import Layout from '@/shared/layout';
import Ex03bStartPage from '@/pages/ex-03b-start';

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
        {
          path: 'ex-03-start',
          element: <Ex03StartPage />,
        },
        {
          path: 'ex-03b-start',
          element: <Ex03bStartPage />,
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
