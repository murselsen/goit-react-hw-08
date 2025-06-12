import React from "react";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/"  />
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/contacts" />
      </Routes>
    </>
  );
};

export default App;
