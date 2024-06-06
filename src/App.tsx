import { useState } from "react";

import "./App.css";
import { Resent_Posts } from "./components/Posts/Resent_Posts";
import { NavBar } from "./components/NavBar/NavBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Resent_Posts />
    </>
  );
}

export default App;
