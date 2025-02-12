import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import AppLayout from "./applayout";
import Home from "./pages/home";
import Business from "./pages/business";
import Entertainment from "./pages/entertainment";
import Sports from "./pages/sports";
import Politics from "./pages/politics";
import Health from "./pages/Health";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/health",
        element: <Health />,
      },
      {
        path: "/politics",
        element: <Politics />,
      },
      {
        path: "/business",
        element: <Business />,
      },
      {
        path: "/entertainment",
        element: <Entertainment />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
