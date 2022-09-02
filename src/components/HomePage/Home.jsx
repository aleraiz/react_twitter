import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/storeSlice";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const store = useSelector((state) => state.store);
  console.log(store);
  useEffect(() => {
    console.log(typeof store.userId);
    const getUserData = async () => {
      const result = await axios({
        method: "GET",
        url: `http://localhost:8000/user/${store.userId}`,
      });
      console.log(result.data);
      setUserData(result.data);
    };
    getUserData();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        home
        {userData && userData.user[0].email}
        <button
          onClick={() => {
            dispatch(logOut());
            navigate("/welcome");
          }}
        >
          LogOut
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Home;
