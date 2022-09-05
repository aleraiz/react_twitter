import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { logIn } from "../../redux/storeSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Welcome.css";

const style = {
  position: "relative",
  left: "35%",
  top: "25%",
  height: "800px",
  width: "100%",
};

export function LoginModal({ open, handleOpen, handleClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const tryLogin = (e) => {
    e.preventDefault();
    const userData = async () => {
      setError(null);
      const result = await axios({
        method: "POST",
        url: `http://localhost:8000/login/`,
        data: {
          emailOrUsername: username,
          password: password,
        },
      });
      dispatch(logIn(result.data));
      if (result.data.message) {
        console.log(result.data.message);
        setError(result.data.message);
      } else {
        navigate("/");
      }
    };
    userData();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description">
            <div className="loginModalBg">
              <div className="col loginModal p-3 border border-1 shadow rounded">
                <button
                  className="btn"
                  id="buttonCloseLoginModal"
                  onClick={handleClose}
                >
                  X
                </button>
                <h2>Sign in to Twitter</h2>
                <button
                  className="btn btn-outline-dark rounded-pill btn-google"
                  style={{ marginLeft: "20%", marginTop: "2%", width: "50%" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  Sign up with Google{" "}
                </button>
                <br />
                <button
                  className="btn btn-outline-dark rounded-pill btn-apple"
                  style={{ marginLeft: "20%", marginTop: "2%", width: "50%" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    style={{ fill: "black" }}
                  >
                    <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
                  </svg>
                  Sign up with Apple
                </button>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <hr /> <p style={{ padding: "0 5px" }}>or</p> <hr />
                </div>
                {error && <p>{error}</p>}
                <form onSubmit={tryLogin}>
                  <div className="form-floating">
                    <input
                      type="text"
                      name="emailOrUsername"
                      className="form-control bg-transparent"
                      id="emailOrUsername"
                      placeholder="email"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                    <label htmlFor="emailOrUsername" className="registerLabels">
                      {" "}
                      Email or Username{" "}
                    </label>
                    <br />
                    <br />
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      name="password"
                      className="form-control bg-transparent"
                      id="password"
                      placeholder="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label htmlFor="password" className="registerLabels">
                      {" "}
                      Password{" "}
                    </label>
                    <br />
                    <br />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-5 fw-bold fs-5  float-end"
                    name="login"
                  >
                    Sign in to Twitter
                  </button>
                </form>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
