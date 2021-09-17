import React from "react";
import ColorList from "./components/ColorList"
import AddColorForm from "./components/AddColorForm";
import { Routes, Route } from "react-router-dom";
import { ColorProvider } from "./components/color-hooks";
import { ColorDetails } from "./components/ColorDetails";


function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route path="/" element={<ColorList />} />
        <Route path=":id" element={<ColorDetails />} />
      </Routes>
    </ColorProvider>
  )
}

export default App;
