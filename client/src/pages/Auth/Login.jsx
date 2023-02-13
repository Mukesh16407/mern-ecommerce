import React, { useState } from "react";
import "./auth.css";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { Card } from "../../Components/card/Card";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Loader } from "../../Components/loader/Loader";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("User Sign Successfully");
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  //login with google
  const provider = new GoogleAuthProvider();

  const loginWithGoogle=()=>{

    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
     toast.success("Login with Google Successful Done")
     navigate("/")
    
  }).catch((error) => {
    toast.error(error.message)
  });
  }
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
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
              <button className="--btn --btn-block --btn-primary" type="submit">
                Login
              </button>
              <div className="links">
                <Link to={"/reset"}>Reset Password</Link>
              </div>
              <p style={{ color: "black" }}>--or--</p>
            </form>
            <button className="--btn --btn-block --btn-danger" onClick={loginWithGoogle}>
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
