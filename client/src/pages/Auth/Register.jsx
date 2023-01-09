import React from "react";
import { Card } from "../../Components/card/Card";
import registeImg from "../../assets/register.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Loader } from "../../Components/loader/Loader";

export const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    conformPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setUser((prev1) => {
      return {
        ...prev1,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, conformPassword } = user;

    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else if (conformPassword === "") {
      toast.error("conformPassword is required!", {
        position: "top-center",
      });
    } else if (conformPassword.length < 6) {
      toast.error("confirm password must be 6 char!", {
        position: "top-center",
      });
    } else if (password !== conformPassword) {
      toast.error("pass and Cpass are not matching!", {
        position: "top-center",
      });
    } else {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setIsLoading(false);
          toast.success("Register Sussessful");
          navigate("/login");
        })
        .catch((error) => {
          setIsLoading(true);
          toast.error(error.message);
        });
    }
  };
  return (
    <>
    {isLoading && <Loader/>}
      <section className="container auth">
        <Card>
          <div className="form">
            <h2>REGISTER</h2>
            <form onClick={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={user.name}
                onChange={handleInputData}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleInputData}
              />
              <input
                type="password"
                placeholder="Conform Password"
                name="conformPassword"
                value={user.conformPassword}
                onChange={handleInputData}
              />
              <button className="--btn --btn-block --btn-primary" type="submit">
                REGISTER
              </button>
              <span className="register">
                <p style={{color:"black"}}>Already have an Account?</p>
                <Link to={"/login"} >
                  Login
                </Link>
              </span>
            </form>
           
          </div>
        </Card>
        <div className="img">
          <img src={registeImg} alt="RegisterImg" width={"400px"} />
        </div>
      </section>
    </>
  );
};
