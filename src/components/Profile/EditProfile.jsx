import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function EditProfile(props) {
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    img: "",
    description: "",
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="d-flex">
        <div className="me-5" onClick={props.onHide}>
          <img
            src={`./img/xmark-solid.svg`}
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
            alt="arrowBack"
          />
        </div>
        <div className="d-flex w-100 justify-content-between">
          <div>
            <Modal.Title id="contained-modal-title-vcenter">
              Editar perfil
            </Modal.Title>
          </div>
          <div>
            <button className="btn bg-dark text-white rounded-pill fw-bold ms-3 px-3">
              Guardar
            </button>{" "}
          </div>
        </div>
      </Modal.Header>
      <Modal.Body closeButton>
        <form action="">
          <div className="my-3">
            <label htmlFor="firstname">Nombre</label>
            <input
              type="text"
              name="firstname"
              value={""}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, firstname: e.target.value };
                });
              }}
            />
          </div>
          <div className="my-3">
            <label htmlFor="lastname">Apellido</label>
            <input
              type="text"
              name="lastname"
              value={""}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, lastname: e.target.value };
                });
              }}
            />
          </div>
          <div className="my-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={""}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, username: e.target.value };
                });
              }}
            />
          </div>
          <div className="my-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={""}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, description: e.target.value };
                });
              }}
            />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
