import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";

export const ShowOnLogin = ({ chidren }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
 
  if (isLoggedIn) {
    return chidren;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
 
  if (!isLoggedIn) {
    return children;
  }
  return null;
};
