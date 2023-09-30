import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { UserPage } from '../pages/UserPage';

import { App } from 'src/App';
import { ProfilePage } from 'src/pages/ProfilePage';
import { RepositoryPage } from 'src/pages/RepositoryPage';
import { FollowerPage } from 'src/pages/FollowerPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: ':id',
        element: <UserPage />,
        children: [
          {
            path: '',
            element: <ProfilePage />
          },
          {
            path: 'repos',
            element: <RepositoryPage />
          },
          {
            path: 'followers',
            element: <FollowerPage />
          }
        ]
      }
    ]
  }
]);
