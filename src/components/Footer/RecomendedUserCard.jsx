import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function RecomendedUserCard({
  user,
  setHasFollowed,
  hasFollowed,
}) {
  const navigate = useNavigate();
  // const [followed, setFollowed] = React.useState(false);

  // const store = useSelector((state) => state.store);
  // React.useEffect(() => {
  //   const followUser = async () => {
  //     await axios({
  //       method: "post",
  //       url: `http://localhost:8000/user/profile/${user._id}`,
  //       data: {
  //         user: store.userId,
  //       },
  //     });
  //   };
  //   followUser();
  // }, [followed]);
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
        onClick={() => {
          navigate(`/profile/${user._id}`);
        }}
      >
        <h3 className="recomendedTitle">
          {user.firstname} {user.lastname}
        </h3>
        <p className="recomendedUser">@{user.username}</p>
      </div>
      <button
        className="recomendedFollow"
        onClick={() => {
          // setFollowed(!followed);
          setHasFollowed(!hasFollowed);
        }}
      >
        Follow
      </button>
    </div>
  );
}
