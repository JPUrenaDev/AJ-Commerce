import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import { RouterProvider } from "react-router";
import { Resent_Posts } from "./components/Posts/Resent_Posts.tsx";
import { Login } from "./components/Login/Login.tsx";
import { PostsDetails } from "./components/PostsDetails/PostsDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Resent_Posts />,
      },
      {
        path: "/postsDetails",
        element: <PostsDetails />,
      },
      {
        path: "postsDetails/:category",
        element: <PostsDetails />,
      },
      {
        path: "/login/",
        element: <Login />,
      },
    ],
  },
]);

/*
 <RouterProvider router={router}>
  </RouterProvider>
*/
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
