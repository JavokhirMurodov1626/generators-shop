// import { lazy } from "react";
// import { createBrowserRouter } from "react-router-dom";
// import Root from "./pages/Root";
// import Home from "./pages/Home";

// const About = lazy(() => import("./pages/About"));

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       { path: "about", element: <About /> },
//     ],
//   },
// ]);

// export default routes;
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Root />}
        >
          <Route index element={<Home />} />
          <Route path="about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

