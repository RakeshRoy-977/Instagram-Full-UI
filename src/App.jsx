import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Page/Auth";
import Profile from "./Page/Profile";
import FeedPage from "./Page/FeedPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
