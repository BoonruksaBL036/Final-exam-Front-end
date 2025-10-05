import { createBrowserRouter } from "react-router";
import  {MainLayout}  from "../layouts/MainLayout";
import Home from "../pages/Home.jsx"
import NotFound from "../pages/NotFound.jsx";
import AddBook from "../pages/AddBook.jsx";
import Journals from "../pages/Journals.jsx";
import Comics from "../pages/Comics.jsx";
import Books from "../pages/Books.jsx";
import ItemDetail from "../pages/ItemDetail.jsx";
import AddJournal from "../pages/AddJournal.jsx";
import AddComic from "../pages/AddComic.jsx";
import UpdateBook from "../pages/UpdateBook.jsx";
import UpdateComic from "../pages/UpdateComic.jsx";
import UpdateJournal from "../pages/UpdateJournal.jsx";

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
        path: "/books",
        element: <Books />,
      },
      {
        path: "/journals",
        element: <Journals />,
      },
      {
        path: "/comics",
        element: <Comics />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/add-journal",
        element: <AddJournal/>,
      },
      {
        path: "/add-comic",
        element: <AddComic/>,
      },
      {
        path: "/:type/:id",
        element: <ItemDetail />,
      },
      {
        path: "/update/book/:id",
        element: <UpdateBook />,
      },
      {
        path: "/update/comic/:id",
        element: <UpdateComic />,
      },
      {
        path: "/update/journal/:id",
        element: <UpdateJournal />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
