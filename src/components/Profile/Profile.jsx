import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import arrowBack from "./arrow-left-solid.svg";
import fondoPerfil from "./fondoPerfil.jpg";
import defaultProfile from "./default.jpg";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditProfile from "./EditProfile";

export default function Profile() {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div className="container justify-content-md-between d-flex p-2">
      <div className="d-none col-md-1 d-md-block col-lg-3">
        <Navbar />
      </div>
      <div className="col-12 col-md-11 col-lg-6 min-vh-100 mx-md-3">
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
                  src={defaultProfile}
                  style={{ width: "100px", height: "100px" }}
                  alt=""
                />
              </div>
              <div>
                <button
                  className="btn border-secondary rounded-pill"
                  onClick={() => setModalShow(true)}
                >
                  <span className="fw-bold">Editar perfil </span>
                </button>
              </div>
            </div>

            <div className="d-flex flex-column">
              <div className="fw-bold">firstname lastname</div>
              <div className="">@username</div>
            </div>
            <div className="mt-3">description</div>

            <div className="d-flex mt-2">
              <div className="me-3">
                <span className="fw-bold text-dark">311</span>
                <span
                  className="ms-2"
                  onClick={() => {
                    navigate("/follows");
                  }}
                >
                  Siguiendo
                </span>
              </div>
              <div className="me-3">
                <span className="fw-bold text-dark">356</span>
                <span
                  className="ms-2"
                  onClick={() => {
                    navigate("/follows");
                  }}
                >
                  Seguidores
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">Seccion tweets</div>
      </div>
      <div className="d-none col col-lg-3 d-lg-block">
        <Footer />
      </div>
      <EditProfile show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
