import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./i18n";
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
