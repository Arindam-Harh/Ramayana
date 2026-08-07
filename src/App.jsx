import AppLayout from "../components/layouts/AppLayout.jsx";
import { Characters } from "../pages/Characters.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { ErrorPage } from "../pages/ErrorPage.jsx";
import { Timeline } from "../pages/Timeline.jsx";
import { Kandas } from "../pages/kandas.jsx";
import { IndiaMap} from "../pages/IndiaMap.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/characters",
          element: <Characters />,
        },
        {
          path: "/timeline",
          element: <Timeline />,
        },
        {
          path: "/kandas",
          element: <Kandas />,
        },
        {
          path: "/map",
          element: <IndiaMap />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
