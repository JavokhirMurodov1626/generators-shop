import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./i18n";


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
