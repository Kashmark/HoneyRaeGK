import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { Login } from "./components/auth/Login.js";
import { Register } from "./components/auth/Register.js";
import { Authorized } from "./views/Authorized.js";
import { ApplicationViews } from "./views/ApplicationViews.js";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          // check if the user is authorized first
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};
