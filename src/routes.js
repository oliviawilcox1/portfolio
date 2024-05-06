import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import ContactForm from "./pages/Message";
import Projects from "./pages/Projects";

// import Page404 from "../pages/auth/Page404";
// ----------------------------------------------------------------------

export default function Router() {

  const routes = useRoutes([
    {
      path: "/portfolio",
      element: (
        <Layout />
      ),
      children: [
        { element: <Navigate to="/portfolio/about" />, index: true },
        {
          path: "about",
          element: (<Home />),
        },
        {
          path: "projects",
          element: (<Projects />),
        },
        {
          path: "experience",
          element: (<Experience/>),
        },
        {
          path: "contact",
          element: (<ContactForm/>),
        },
      ],
    },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { path: "404", element: <Page404 /> },
    //     { path: "*", element: <Navigate to="/404" /> },
    //   ],
    // },
  ]);

  return routes;
}