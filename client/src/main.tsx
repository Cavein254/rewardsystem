import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { AuthProvider } from "./Auth.tsx";
import { ApolloProvider } from "@apollo/client";
import {client} from "./graphql/apollo-client.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client} >
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);
