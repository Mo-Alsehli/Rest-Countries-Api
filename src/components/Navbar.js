import React from "react";
import { useGlobalContext } from "../context";
export default function Navbar() {
  const { toggleTheme } = useGlobalContext();
  return (
    <nav className="navbar">
      <h1>Where in the world?</h1>
      <div onClick={toggleTheme}>
        <i className="fa-solid fa-moon"></i>
        <p>Dark Mode</p>
      </div>
    </nav>
  );
}
