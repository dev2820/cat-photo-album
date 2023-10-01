import { createBrowserRouter } from 'react-router-dom';
import { App } from 'src/App';
import { HomePage } from 'src/pages/HomePage';
import { UserPage } from 'src/pages/UserPage';
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
