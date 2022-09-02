import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ user, children }) => {
  const store = useSelector((state) => state.store);
  console.log(store);
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const verification = async () => {
      const result = await axios({
        method: "POST",
        url: `http://localhost:8000/auth/verifyToken`,
        data: {
          id: store.userId,
          username: store.userName,
          token: store.token,
        },
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      });
      return result.data;
    };
    verification().then((verify) => {
      if (verify.error) {
        setData(false);
        setIsLoading(false);
      } else if (verify.decoded) {
        setData(true);
        setIsLoading(false);
      }
    });
  }, []);
  if (isLoading) {
    return <h2>loading</h2>;
  } else {
    return data ? children : <Navigate to="/welcome" replace />;
  }
};

export default ProtectedRoute;
