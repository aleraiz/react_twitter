import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <div className="col" id="welcomeImgDiv">
          <img src="/img/logo.png" className="w-50" id="welcomeImg" alt="" />
        </div>
        <div
          className="col d-flex flex-column align-items-start ps-5"
          id="welcomeModals"
        >
          <div>
            <h1 className="welcomeTitle fw-bold">Lo que está pasando ahora</h1>
          </div>
          <h3>Unete a Twitter hoy mismo.</h3>
          <button
            className="btn btn-primary rounded-pill px-5 border border-primary border-4 fw-bold"
            id="buttonRegisterModal"
            onClick={() => {
              navigate("/register");
            }}
          >
            Registrate Gratis
          </button>
          <br />
          <br />

          <h3>¿Ya tienes una cuenta?</h3>
          <button
            className="btn btn-primary-70 rounded-pill px-5 border border-primary border-4 fw-bold"
            id="buttonLoginModal"
            onClick={() => {
              navigate("/login");
            }}
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
