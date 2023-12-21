import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";

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
