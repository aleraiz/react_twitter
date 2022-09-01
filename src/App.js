import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const store = useSelector((state) => state.store);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute user={store.token}>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
