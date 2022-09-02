import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Welcome/Login";
import Register from "./components/Welcome/Register";
import Home from "./components/HomePage/Home";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile/Profile";
import UserProfile from "./components/Profile/UserProfile";
import Follows from "./components/Profile/Follows";

function App() {
  const store = useSelector((state) => state.store);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={store}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mainProfile"
          element={
            <ProtectedRoute user={store}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={store}>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/follows"
          element={
            <ProtectedRoute user={store}>
              <Follows />
            </ProtectedRoute>
          }
        />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
