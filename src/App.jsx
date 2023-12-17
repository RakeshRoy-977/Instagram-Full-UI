import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Page/Auth";
import Profile from "./Page/Profile";
import FeedPage from "./Page/FeedPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Feed" element={<FeedPage />} />
      </Routes>
    </>
  );
};

export default App;
