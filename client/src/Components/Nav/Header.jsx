import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import "./header.css";
import { useDispatch } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import { ShowOnLogin, ShowOnLogout } from "../hiddenLink/HiddenLinks";

const logo = (
  <div className="logo">
    <NavLink to="/">
      <h2>
        E <span>Shop</span>.
      </h2>
    </NavLink>
  </div>
);
const cart = (
  <div className="cart">
    <NavLink to="/cart">
      Cart <FaShoppingCart size={20} />
      <p>0</p>
    </NavLink>
  </div>
);

const activeLink = ({ isActive }) => (isActive ? `${"active"}` : "");
export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setdisplayName] = useState("");

  
  // monetring currently signin user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //console.log(user)
        const uid = user.uid;

        if (user.displayName === null) {
          const u1 = user.email.slice(0, -10);
          //const u1 = user.email.substring(0,user.email.indexOf("@"))
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setdisplayName(uName);
        } else {
          setdisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: uid,
          })
        );
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };
  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign Out Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <header>
        <div className="header">{logo}</div>
        <nav className={showMenu ? `${"show-nav"}` : `${"hide-nav"}`}>
          <div
            className={
              showMenu
                ? `${"nav-wrapper"} ${"show-nav-wrapper"}`
                : `${"nav-wrapper"}`
            }
            onClick={hideMenu}
          ></div>
          <ul onClick={hideMenu}>
            <li className="logo-mobile">
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="header-right" onClick={hideMenu}>
            <span className="links">
            <ShowOnLogout>
                <NavLink to="/login" className={activeLink}>
                  Login
                </NavLink>
                </ShowOnLogout> 
                <ShowOnLogin> 
                <a href="#home" style={{ color: "#ff7722" }}>
                  <FaUserCircle size={16} />
                  Hi, {displayName}
                </a>
                </ShowOnLogin>

                <ShowOnLogin>
              <NavLink to="/order-history" className={activeLink}>
                My Order
              </NavLink>

              </ShowOnLogin>
             
              <ShowOnLogin>
                <NavLink to="/" onClick={logOutUser}>
                  Log Out
                </NavLink>
                </ShowOnLogin>
            </span>
                {cart}      
          </div>
        </nav>
        <div className="menu-icon">
          {cart}
          <HiOutlineMenu size={28} onClick={toggleMenu} />
        </div>
      </header>
    </>
  );
};
