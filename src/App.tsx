import { useState } from "react";

import "./App.css";
import { Resent_Posts } from "./components/Posts/Resent_Posts";
import { NavBar } from "./components/NavBar/NavBar";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Resent_Posts />
      <SignUp />
      <Login />
    </>
  );
}

export default App;
