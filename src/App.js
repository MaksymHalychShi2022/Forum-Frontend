import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout";
import Categories from "./components/Categories";
import Topics from "./components/Topics";
import Comments from "./components/Comments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <NotFoundPage/>,
    children: [
      {index: true, element: <Categories/>},
      {path: "signin", element: <SignInPage/>},
      {path: "signup", element: <SignUpPage/>},
      {
        path: "/categories",
        element: <Categories />,
        children: [
          {
            path: ":categoryId/topics",
            element: <Topics />,
            children: [
              {
                path: ":topicId/comments",
                element: <Comments />
              }
            ]
          }
        ]
      }
    ]

  }
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
