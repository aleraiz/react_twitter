import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/storeSlice";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Tweet from "../Tweet";
import PostTweet from "./PostTweet";

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
    <div className="container justify-content-md-between d-flex p-2">
      <div className="d-none col-md-1 d-md-block col-lg-3">
        <Navbar />
      </div>
      <div className="col-12 col-md-11 col-lg-6 min-vh-100 mx-md-3">
        <PostTweet />
        <Tweet />
      </div>

      <div className="d-none col col-lg-3 d-lg-block">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
