import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [Mode, setMode] = useState("white");
  const [TextColor, setTextColor] = useState("dark");
  const [ModeText, setModeText] = useState("Enable Dark Mode");
  const [Border, setBorder] = useState("");

  const toggleMode = () => {
    if (Mode === "white") {
      setMode("dark");
      setTextColor("white");
      setModeText("Disable Dark Mode");
      setBorder("white");
    } else {
      setMode("white");
      setTextColor("dark");
      setModeText("Enable Dark Mode");
      setBorder("");
    }
  };
  return (
    <>
      <div
        className={`w-full bg-${Mode} text-${TextColor}`}
        style={{ height: "721px" }}
      >
        <Navbar modetext={ModeText} toggleMode={toggleMode} border={Border} />
        <Routes>
          <Route
            path="/"
            element={<Textform mode={Mode} textclr={TextColor} />}
          />
        </Routes>
      </div>
    </>
  );
}
