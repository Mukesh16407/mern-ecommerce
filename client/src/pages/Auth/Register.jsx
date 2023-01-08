import React from "react";
import { Card } from '../../Components/card/Card';
import registeImg from '../../assets/register.png';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <section className="container auth">
      <Card>
        <div className="form">
          <h2>REGISTER</h2>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Conform Password" required />
            <button className="btn --btn-block --btn-primary">REGISTER</button>
            <span className="register">
              <p style={{ color: "black" }}>Already have an Account?</p>
              <Link to={"/login"} style={{ color: "black" }}>
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
  );
};
