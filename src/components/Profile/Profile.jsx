import React from "react";
import "./profile.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import fondoPerfil from "./fondoPerfil.jpg";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const store = useSelector((state) => state.store);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    const findUser = async () => {
      const result = await axios({
        method: "get",
        url: `http://localhost:8000/user/${store.userId}`,
      });
      setUser(result.data.user[0]);
      console.log(result.data.user[0]);
    };
    findUser();
  }, []);

  return (
    <div className="container justify-content-md-between d-flex p-2">
      <div className="d-none col-md-1 d-md-block col-lg-3">
        <Navbar />
      </div>
      {user && (
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
              <div className=" fw-bold">
                {user.firstname} {user.lastname}
              </div>
              <div className=""> @{user.username} </div>
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
                    src={`./img/default.jpg`}
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
                <div className="fw-bold">
                  {user.firstname} {user.lastname}
                </div>
                <div className="">@{user.username}</div>
              </div>
              <div className="mt-3">{user.description}</div>

              <div className="d-flex mt-2">
                <div
                  className="me-3 hover-underline"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/follows");
                  }}
                >
                  <span className="fw-bold text-dark ">
                    {user.followers.length}
                  </span>
                  <span className="ms-1 ">Seguidores</span>
                </div>
                <div
                  className="me-3 hover-underline"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/follows");
                  }}
                >
                  <span className="fw-bold text-dark">
                    {user.following.length}
                  </span>
                  <span className="ms-1">Seguidores</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            {user.tweets.length > 0 ? (
              user.tweets.map((tweet) => {
                return "tweet";
              })
            ) : (
              <p>No hay tweets</p>
            )}
          </div>
        </div>
      )}
      <div className="d-none col col-lg-3 d-lg-block">
        <Footer />
      </div>
      <EditProfile show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
