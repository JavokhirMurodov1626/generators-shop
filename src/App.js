import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./i18n";


function App() {
  return <RouterProvider router={routes} />;
}

export default App;
