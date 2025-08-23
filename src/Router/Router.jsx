import { createBrowserRouter } from "react-router";
import MainPage from "../Pages/MainPage";
import Contact from "../Pages/Contact";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
