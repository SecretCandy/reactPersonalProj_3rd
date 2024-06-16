import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { getUserInfo } from "./lib/api/auth";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route
              index
              element={<Home user={user} />}
            />
            <Route
              path="/detail/:id"
              element={<Detail />}
            />
            <Route path="/profile" element={<Profile setUser={setUser} />} />
          </Route>
          <Route path="/sign_in" element={<SignIn user={user} setUser={setUser} />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
