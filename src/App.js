import React, { useEffect } from "react"
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";

function App() {
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log("I HAVE TOKEN >>", token)
  }, [])

  return (
    <div className="app">
        <Login />
    </div>
  );
}

export default App;