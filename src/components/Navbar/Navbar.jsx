import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <ul>
          <li>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/mainProfile");
              }}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/follows");
              }}
            >
              Follows
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
