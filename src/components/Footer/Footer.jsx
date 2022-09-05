import React from "react";
import "./Footer.css";
import TendenciasCard from "./TendenciasCard";
import RecomendedUserCard from "./RecomendedUserCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Footer() {
  const [recomended, setRecomended] = React.useState();
  const [hasFollowed, setHasFollowed] = React.useState(false);
  const store = useSelector((state) => state.store);
  React.useEffect(() => {
    const getRecomendedUsers = async () => {
      const result = await axios({
        method: "get",
        url: `http://localhost:8000/user/recomended/${store.userId}`,
      });
      setRecomended(result.data.recomendedUsers);
    };
    getRecomendedUsers();
  }, []);

  React.useEffect(() => {
    const getRecomendedUsers = async () => {
      const result = await axios({
        method: "get",
        url: `http://localhost:8000/user/recomended/${store.userId}`,
      });
      setRecomended(result.data.recomendedUsers);
    };
    getRecomendedUsers();
  }, [hasFollowed]);

  return (
    <>
      <div className="footerDiv">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search Twitter"
            className="footerSearch"
          />
        </div>
        <div className="tendencias">
          <TendenciasCard
            title={"CopaMundialFIFA2022"}
            numberTweets={"650k Tweets"}
          />
          <TendenciasCard
            title={"Arcane2ndSeason"}
            numberTweets={"650k Tweets"}
          />
          <TendenciasCard title={"Tendencia"} numberTweets={"650k Tweets"} />
        </div>
        <div className="recomendados">
          <h5>Recomendados</h5>
          {recomended &&
            recomended.map((user) => {
              return (
                <RecomendedUserCard
                  user={user}
                  setHasFollowed={setHasFollowed}
                  hasFollowed={hasFollowed}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
