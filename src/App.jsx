import AppLayout from "../components/layouts/AppLayout.jsx";
import { Characters } from "../pages/Characters.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { ErrorPage } from "../pages/ErrorPage.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/characters",
          element: <Characters />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
