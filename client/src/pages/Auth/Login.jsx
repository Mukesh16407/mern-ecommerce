import React, { useEffect, useState } from "react";
import "./auth.css";
import { useDispatch, useSelector } from "react-redux";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { Card } from "../../Components/card/Card";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Loader } from "../../Components/loader/Loader";

import { setActiveUser } from "../../redux/action/userAction";
import { createOrUpdateUser } from "../../functions/auth";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const currentUser = useSelector((state) => state.auth.user);

  const roleBaseRedirect = (req) => {
    if (req.data.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/user/history");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);

      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      user
        .getIdToken(/* forceRefresh */ true)
        .then((idToken) => createOrUpdateUser(idToken))
        .then((res) => {
          const getUserData = {
            name: res.data.name,
            email: res.data.email,
            token: idTokenResult.token,
            role: res.data.role,
            _id: res.data._id,
          };
          console.log("CREATE AND UPDATE", res);
          dispatch(setActiveUser(getUserData));
          roleBaseRedirect(res);
        })
        .catch((error) => console.log("error", error));

      setIsLoading(false);
      toast.success("User Sign Successfully");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }

    //   signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       const user = userCredential.user;

    //       //console.log(user.accessToken,"user");
    //       user
    //         .getIdToken(/* forceRefresh */ true)
    //         .then((idToken) => createOrUpdateUser(idToken))
    //         .then((res) => {})
    //         .catch((error) => console.log("error", error));

    //       setIsLoading(false);
    //       toast.success("User Sign Successfully");
    //       navigate("/");
    //     })
    //     .catch((error) => {
    //       setIsLoading(false);
    //       toast.error(error.message);
    //     });
  };

  //login with google
  const provider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();

        user
          .getIdToken(/* forceRefresh */ true)
          .then((idToken) => createOrUpdateUser(idToken))
          .then((res) => {
            const getUserData = {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
            };

            dispatch(setActiveUser(getUserData));
            roleBaseRedirect(res);
          })
          .catch((error) => console.log("error", error));
        toast.success("Login with Google Successful Done");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    if (currentUser && currentUser.token) {
      navigate("/");
    }
  }, [currentUser]);
  return (
    <>
      {isLoading && <Loader />}
      <section className="container auth">
        <div className="img">
          <img src={loginImg} alt="LoginImg" width={"400px"} />
        </div>
        <Card>
          <div className="form">
            <h2>LOGIN</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="--btn --btn-block --btn-primary" type="submit">
                Login
              </button>
              <div className="links">
                <Link to={"/reset"} style={{ color: "black" }}>
                  Reset Password
                </Link>
              </div>
              <p style={{ color: "black" }}>--or--</p>
            </form>
            <button
              className="--btn --btn-block --btn-danger"
              onClick={loginWithGoogle}
            >
              <GoogleIcon style={{ marginRight: "5px" }} /> Login With Google
            </button>
            <span className="register">
              <p style={{ color: "black" }}>Don't have an Account?</p>
              <Link to={"/register"}>Register</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};
