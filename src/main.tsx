import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import { RouterProvider } from "react-router";

import { Login } from "./components/Login/Login.tsx";
import { PostsDetails } from "./components/PostsDetails/PostsDetails.tsx";
import { Post } from "./pages/Post.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Post />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "postsDetails",
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
