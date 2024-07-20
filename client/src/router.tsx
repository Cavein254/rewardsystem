import { createBrowserRouter } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import About from "./components/landing/About";
import ContactUs from "./components/landing/Feature";
import PostDetails from "./components/post/PostDetails";

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
    path: "/contactus",
    element: <ContactUs />,
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
      {
        path: "/post/:slug",
        element: <PostDetails />,
      },
    ],
  },
]);
