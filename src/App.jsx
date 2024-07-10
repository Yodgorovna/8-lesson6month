import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layout/main-layout/main-layout";
import { Home } from "./pages/home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
