import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./Auth.tsx";
import { client } from "./graphql/apollo-client.ts";
import "./index.css";
import { router } from "./router.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);
