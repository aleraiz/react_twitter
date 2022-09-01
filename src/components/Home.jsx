import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logOut } from "../redux/storeSlice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [homeData, setHomeData] = useState();
  const store = useSelector((state) => state.store);
  console.log(store);
  useEffect(() => {
    const getHomeData = async () => {
      const result = await axios({
        method: "GET",
        baseURL: `http://localhost:8000`,
        url: `/${store.userId}`,
      });
      setHomeData(result.data);
    };
    getHomeData();
  }, []);

  return (
    <div>
      home
      {homeData && homeData.user.email}
      <button
        onClick={() => {
          dispatch(logOut());
          navigate("/welcome");
        }}
      >
        LogOut
      </button>
    </div>
  );
}

export default Home;
