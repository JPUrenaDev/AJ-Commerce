import { useState } from "react";

import "./App.css";
import { Resent_Posts } from "./components/Posts/Resent_Posts";
import { NavBar } from "./components/NavBar/NavBar";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { BrowserRouter } from "react-router-dom";
import { PostsDetails } from "./components/PostsDetails/PostsDetails";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Resent_Posts />
        <SignUp />
        <Login />
        <PostsDetails />
      </BrowserRouter>
    </>
  );
}

export default App;
