import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../redux/storeSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);
  const tryLogin = (e) => {
    e.preventDefault();
    const userData = async () => {
      const result = await axios({
        method: "post",
        baseURL: `http://localhost:8000/login`,
        url: `/${e.target[0].value}/${e.target[1].value}`,
      });
      console.log(result.data);
      dispatch(logIn(result.data));
      console.log(store);
      navigate("/");
    };

    userData();

    console.log(e.target[0].value);
    console.log(e.target[1].value);
  };

  return (
    <div className="loginModalBg">
      <div className="col loginModal p-3 border border-1 shadow rounded">
        <h2>Ingresar</h2>
        <br />
        <br />
        <form onSubmit={tryLogin}>
          <div className="form-floating">
            <input
              type="text"
              name="emailOrUsername"
              className="form-control bg-transparent"
              id="emailOrUsername"
              placeholder="email"
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
            Ingresar
          </button>
        </form>
        <button
          className="btn btn-secondary rounded-pill"
          id="buttonCloseLoginModal"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Login;
