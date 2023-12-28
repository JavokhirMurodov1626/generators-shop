import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "about", element: <About /> },
    ],
  },
]);

export default routes;
