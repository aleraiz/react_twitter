import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);
  const registerUser = (e) => {
    e.preventDefault();
    const newUser = async () => {
      const result = await axios({
        method: "POST",
        baseURL: `http://localhost:8000/users`,
        data: {
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value,
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value,
        },
      });
      console.log(result);
      navigate("/login");
    };
    newUser();
  };

  return (
    <div className="registerModalBg">
      <div className="col registerModal p-3 border border-1 shadow rounded">
        <h2>Registrate</h2>
        <br />
        <br />
        <form onSubmit={registerUser}>
          <div className="form-floating">
            <input
              type="text"
              name="firstname"
              className="form-control bg-transparent"
              placeholder="firstname"
              id="firstname"
            />
            <label htmlFor="firstname" className="registerLabels">
              {" "}
              Firstname{" "}
            </label>
            <br />
            <br />
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="lastname"
              className="form-control bg-transparent"
              placeholder="lastname"
              id="lastname"
            />
            <label htmlFor="lastname" className="registerLabels">
              {" "}
              Lastname{" "}
            </label>
            <br />
            <br />
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="username"
              className="form-control bg-transparent"
              placeholder="username"
              id="username"
            />
            <label htmlFor="username" className="registerLabels">
              {" "}
              Username{" "}
            </label>
            <br />
            <br />
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="email"
              className="form-control bg-transparent"
              placeholder="email"
              id="email"
            />
            <label htmlFor="email" className="registerLabels">
              {" "}
              Email{" "}
            </label>
            <br />
            <br />
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control bg-transparent"
              placeholder="password"
              id="password"
            />
            <label htmlFor="password" className="registerLabels">
              {" "}
              Password{" "}
            </label>
            <br />
            <br />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary rounded-pill px-5 fw-bold fs-5"
              name="register"
            >
              Register
            </button>
          </div>
        </form>
        <br />
        <button
          className="btn btn-secondary rounded-pill float-end"
          id="buttonCloseRegisterModal"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Register;
