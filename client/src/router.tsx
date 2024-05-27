import { createBrowserRouter } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/create/new",
        element: <CreatePost />,
      },
    ],
  },
]);
