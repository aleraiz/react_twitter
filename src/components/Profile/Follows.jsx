import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import arrowBack from "./arrow-left-solid.svg";
import ellipsis from "./ellipsis-solid.svg";
import fondoPerfil from "./fondoPerfil.jpg";
import defaultProfile from "./default.jpg";
import { useNavigate } from "react-router-dom";
import FollowingButton from "./FollowingButton";

export default function Follows() {
  const navigate = useNavigate();
  return (
    <div className="container d-flex p-2">
      <div className="col-3 bg-primary vh-100">Navbar</div>
      {/* <div className="col-6 bg-success min-vh-100">Main</div> */}
      <div className="col-6 min-vh-100">
        <div className="d-flex px-3 bg-light">
          <div className="d-flex justify-content-center align-items-center me-4 ">
            <img
              src={arrowBack}
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              alt="arrowBack"
            />
          </div>
          <div className="d-flex flex-column mb-2">
            <div className=" fw-bold"> firstname lastname</div>
            <div className=""> @username </div>
          </div>
        </div>
        <div className="d-flex">
          <div
            className="border d-flex justify-content-center align-items-center"
            style={{ width: "100%", height: "50px", cursor: "pointer" }}
          >
            <span className="fw-bold">Seguidores</span>
          </div>
          <div
            className="border d-flex justify-content-center align-items-center"
            style={{ width: "100%", height: "50px", cursor: "pointer" }}
          >
            <span className="fw-bold">Siguiendo</span>
          </div>
        </div>
        <div>
          <div
            className="border border-secondary d-flex align-items-center"
            style={{ width: "100%", height: "80px", cursor: "pointer" }}
          >
            <div className="col-1">
              <img
                className="rounded-circle"
                src={defaultProfile}
                style={{ width: "50px", height: "50px" }}
                alt=""
              />
            </div>
            <div className="col-7 d-flex flex-column">
              <span className="fw-bold">name lastname</span>
              <span>@user</span>
            </div>

            <div className="col-4 d-flex justify-content-center">
              <FollowingButton />
            </div>
          </div>
        </div>
      </div>

      <div className="col-3 bg-secondary vh-100">Footer</div>
    </div>
  );
}
