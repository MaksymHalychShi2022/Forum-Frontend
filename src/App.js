import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";
import Comments from "./components/Comments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {index: true, element: <Comments/>},
      {path: "login", element: <SignIn/>},
      {path: "register", element: <SignUp/>},
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
