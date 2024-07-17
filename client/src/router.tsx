import { createBrowserRouter } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/dashboard",
        element: <HomePage />,
      },
      {
        path: "/create/new",
        element: <CreatePost />,
      },
    ],
  },
]);
