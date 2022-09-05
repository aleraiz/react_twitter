import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { logOut } from "../../redux/storeSlice";
import axios from "axios";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.store);
  const [avatar, setAvatar] = React.useState();
  React.useEffect(() => {
    const findAvatar = async () => {
      const result = await axios({
        method: "get",
        url: `http://localhost:8000/user/avatar/${store.userId}`,
      });
      setAvatar(result.data.avatar[0]);
    };
    findAvatar();
  }, []);

  return (
    <>
      <div className="NavbarDiv">
        <div className="logo">
          <img src="./img/logo.png" alt="" width="46px" height="35px" />
        </div>
        <div className="ButtonListDiv">
          <ul className="buttonList">
            <li>
              <button
                className="navbarButton"
                onClick={() => {
                  navigate("/");
                }}
              >
                <i className="fa-sharp fa-solid fa-house icon"></i>
                <span className="navbarButtonText d-none d-lg-inline">
                  {" "}
                  Home
                </span>
              </button>
            </li>
            <li>
              <button className="navbarButton">
                <i className="fa-sharp fa-solid fa-hashtag icon"></i>
                <span className="navbarButtonText d-none d-lg-inline">
                  Explore
                </span>
              </button>
            </li>
            <li>
              <button className="navbarButton">
                <i className="fa-regular fa-bell icon"></i>
                <span className="navbarButtonText d-none d-lg-inline">
                  Notifications
                </span>
              </button>
            </li>
            <li>
              <button className="navbarButton">
                <i className="fa-regular fa-envelope icon"></i>
                <span className="navbarButtonText d-none d-lg-inline">
                  Messages
                </span>
              </button>
            </li>
            <li>
              <button className="navbarButton">
                <i className="fa-regular fa-bookmark icon"></i>
                <span className="navbarButtonText d-none d-lg-inline">
                  Bookmarks
                </span>
              </button>
            </li>
            <li>
              <button className="navbarButton">
                <i className="fa-sharp fa-solid fa-bars icon"></i>
                <span className="navbarButtonText d-none d-lg-inline">
                  Lists
                </span>
              </button>
            </li>
            <li>
              <button
                className="navbarButton"
                onClick={() => {
                  navigate("/mainProfile");
                }}
              >
                {avatar && (
                  <img
                    src={`./img/${avatar.profileImg}`}
                    className="navbarProfileImg"
                    alt="profile"
                  />
                )}
                <span className="navbarButtonText d-none d-lg-inline">
                  Profile
                </span>
              </button>
            </li>
            <li>
              <button className="navbarButton">
                <i className="fa-solid fa-plus icon"></i>
                <span className="navbarButtonText d-none d-lg-inline">
                  More
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className="LogOutButtonDiv">
          <button
            className="logOutButton"
            onClick={() => {
              dispatch(logOut());
              navigate("/welcome");
            }}
          >
            <i className="fa-solid fa-right-from-bracket icon"></i>
            <span className="logOutBtnText d-none d-lg-inline">LogOut</span>
          </button>
        </div>
      </div>
    </>
  );
}
