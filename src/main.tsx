import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { SignUp } from "./components/SignUp/SignUp.tsx";
import { FooterSignUp } from "./components/SignUp/ui/FooterSignUp.tsx";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import { RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <FooterSignUp />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}>
    <Provider store={store}>
      <App />
    </Provider>
  </RouterProvider>
);
