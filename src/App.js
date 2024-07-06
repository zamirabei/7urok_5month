import MainPage from "./mainPage/MainPage/MainPage";

import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

const App = () => {
  const isRequestSent = useSelector((state) => state.app.isRequestSent);

  return (
    <BrowserRouter>
      <MainPage />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route
          path="/page2"
          element={isRequestSent ? <Page2 /> : <Navigate to="/" />}
        />
        <Route
          path="/page3"
          element={isRequestSent ? <Page3 /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
