import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../../redux/storeSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);
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

  // <div className="loginModalBg">
  //   <div className="col loginModal p-3 border border-1 shadow rounded">
  //     <h2>Ingresar</h2>
  //     <br />
  //     <br />
  //     {error && <p>{error}</p>}
  //     <form onSubmit={tryLogin}>
  //       <div className="form-floating">
  //         <input
  //           type="text"
  //           name="emailOrUsername"
  //           className="form-control bg-transparent"
  //           id="emailOrUsername"
  //           placeholder="email"
  //           onChange={(e) => {
  //             setUsername(e.target.value);
  //           }}
  //         />
  //         <label htmlFor="emailOrUsername" className="registerLabels">
  //           {" "}
  //           Email or Username{" "}
  //         </label>
  //         <br />
  //         <br />
  //       </div>
  //       <div className="form-floating">
  //         <input
  //           type="password"
  //           name="password"
  //           className="form-control bg-transparent"
  //           id="password"
  //           placeholder="password"
  //           onChange={(e) => {
  //             setPassword(e.target.value);
  //           }}
  //         />
  //         <label htmlFor="password" className="registerLabels">
  //           {" "}
  //           Password{" "}
  //         </label>
  //         <br />
  //         <br />
  //       </div>
  //       <button
  //         type="submit"
  //         className="btn btn-primary rounded-pill px-5 fw-bold fs-5  float-end"
  //         name="login"
  //       >
  //         Ingresar
  //       </button>
  //     </form>
  //     <button
  //       className="btn btn-secondary rounded-pill"
  //       id="buttonCloseLoginModal"
  //     >
  //       Close
  //     </button>
  //   </div>
  // </div>
};

export default Login;
