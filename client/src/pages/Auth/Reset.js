import React, { useEffect, useState } from "react";
import resetImg from "../../assets/forgot.png";
import { Card } from "../../Components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Loader } from "../../Components/loader/Loader";
import { useSelector } from "react-redux";

export const Reset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = useSelector((state) => state.auth.user);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your Email for reset password");
      })
      .catch((error) => {
        setIsLoading(false);
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
          <img src={resetImg} alt="ForgotImg" width={"400px"} />
        </div>
        <Card>
          <div className="form">
            <h2>RESET PASSWORD</h2>
            <form onSubmit={resetPassword}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                on
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button className="--btn --btn-block --btn-primary" type="submit">
                RESET PASSWORD
              </button>
              <div className="links">
                <p>
                  <Link to={"/register"}>-Register</Link>
                </p>
                <p>
                  <Link to={"/login"}>-Login</Link>
                </p>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
};
