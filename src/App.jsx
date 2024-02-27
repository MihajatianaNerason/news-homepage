import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import List from "./components/List";
import Hero from "./pages/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Hero />
      <List />
    </>
  );
}

export default App;
