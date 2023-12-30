import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Post from './Post.jsx';
import PostDetails from './PostDetails.jsx';

export const routes = [
  {
    path: '/',
    element: <Post />,
  },
  {
    path: '/:postId',
    element: <PostDetails />,
  },
];

const router = createBrowserRouter(routes);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
