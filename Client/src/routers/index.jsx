import { createBrowserRouter } from "react-router";
import  {MainLayout}  from "../layouts/MainLayout";
import Home from "../pages/Home.jsx"
import NotFound from "../pages/NotFound.jsx";
import AddBook from "../pages/AddBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
