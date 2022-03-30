import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getcurrent } from "../../redux/actions/Authactions";

// function PrivateRoute({ children }) {
//   const auth = useSelector((state) => state.Reducer.auth);
//   return auth ? children : <Navigate to="/SignUp" />;
// }

function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const handleEffect = async () => {
    try {
      await dispatch(getcurrent());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleEffect();
  }, []);

  const user = useSelector((state) => state.Reducer.user);

  return !loading && token && user.role == "admin" ? (
    children
  ) : (
    <Navigate to="/signUp"></Navigate>
  );
}
export default AdminRoute;
