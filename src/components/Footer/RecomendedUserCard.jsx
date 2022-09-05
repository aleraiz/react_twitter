import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecomendedUserCard({ user }) {
  const navigate = useNavigate();
  return (
    <div className="recomendedUserCard">
      {user.profileImg.includes("http") ? (
        <img
          className="recomendedImage"
          src={`${user.profileImg}`}
          alt="profile Image"
          width={"20%"}
        />
      ) : (
        <img
          className="recomendedImage"
          src={`./img/${user.profileImg}`}
          alt="profile Image"
          width={"15%"}
        />
      )}
      <div
        className="recomendedTexts"
        onClick={() => navigate(`/user/profile/${user.id}`)}
      >
        <h3 className="recomendedTitle">
          {user.firstname} {user.lastname}
        </h3>
        <p className="recomendedUser">@{user.username}</p>
      </div>
      <button className="recomendedFollow">Follow</button>
    </div>
  );
}
