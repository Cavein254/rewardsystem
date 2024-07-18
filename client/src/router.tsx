import { createBrowserRouter } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import About from "./components/landing/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <About />,
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
