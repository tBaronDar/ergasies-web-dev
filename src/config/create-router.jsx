import { createBrowserRouter, redirect } from 'react-router-dom';
import Ex03StartPage from '@/pages/ex-03-start';

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
            return redirect('/ex-03-start');
          },
        },
        {
          path: 'ex-03-start',
          element: <Ex03StartPage />,
        },
        {
          path: 'ex-03b-start',
          element: <div>ex-03b-start</div>,
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
