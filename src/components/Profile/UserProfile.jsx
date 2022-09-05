import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import fondoPerfil from "./fondoPerfil.jpg";
import { useNavigate } from "react-router-dom";
import FollowButton from "./FollowButton";

export default function UserProfile() {
  const navigate = useNavigate();
  return (
    <div className="container d-flex p-2">
      <div className="d-none col-md-1 d-md-block col-lg-3">
        <Navbar />
      </div>

      <div className="col-12 col-md-11 col-lg-6 min-vh-100 mx-md-3">
        <div className="d-flex px-3 bg-light">
          <div className="d-flex justify-content-center align-items-center me-4 ">
            <img
              src={`./img/arrow-left-solid.svg`}
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              alt="arrowBack"
            />
          </div>
          <div className="d-flex flex-column mb-2">
            <div className=" fw-bold"> firstname lastname</div>
            <div className=""> @username </div>
          </div>
        </div>

        {/* <div className="position-relative"> */}
        <div className="position-relative">
          <div
            style={{
              backgroundImage: `url(${fondoPerfil})`,
              width: "100%",
              height: "200px",
            }}
          ></div>

          <div className="px-2 mb-3">
            <div className="d-flex justify-content-between align-items-center mx-2 position-relative">
              <div
                className="position-relative rounded-circle p-1 bg-light"
                style={{ top: "-50px" }}
              >
                <img
                  className="rounded-circle"
                  src={`./img/default.jpg`}
                  style={{ width: "100px", height: "100px" }}
                  alt=""
                />
              </div>
              <div className="d-flex ">
                <div
                  className="d-flex justify-content-center align-items-center border border-secondary rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                >
                  <img
                    className=""
                    src={`./img/ellipsis-solid.svg`}
                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                    alt="arrowBack"
                  />
                </div>
                <FollowButton />
                {/* <button className="btn bg-dark text-white rounded-pill ms-3">
                  Siguiendo
                </button> */}
              </div>
            </div>

            <div className="d-flex flex-column">
              <div className="fw-bold">firstname lastname</div>
              <div className="">@username</div>
            </div>
            <div className="mt-3">description</div>

            <div className="d-flex mt-2">
              <div
                className="me-3 hover-underline"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/follows");
                }}
              >
                <span className="fw-bold text-dark">311</span>
                <span className="ms-1">Seguidores</span>
              </div>
              <div
                className="me-3 hover-underline"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/follows");
                }}
              >
                <span className="fw-bold text-dark">356</span>
                <span className="ms-1">Seguidores</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">Seccion tweets</div>
      </div>
      <div className="d-none col col-lg-3 d-lg-block">
        <Footer />
      </div>
    </div>
  );
}
