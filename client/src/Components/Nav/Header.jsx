import React, { useEffect,useState } from "react";
import { Menu } from "antd";
import {FaShoppingCart, FaTimes} from 'react-icons/fa';
import {HiOutlineMenu} from 'react-icons/hi'
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut, updateEmail } from "firebase/auth";
import { toast } from "react-toastify";
import "./header.css";

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
      Cart <FaShoppingCart size={20}/>
      <p>0</p>
    </NavLink>
  </div>
);
export const Header = () => {
  const [showMenu,setShowMenu] = useState(false)
  const [current, setCurrent] = useState("home");
  const [currentEmail, setCurrentEmail] = useState("");
  
  const handleClick = (e) => {
    console.log("click ", e.key);
    setCurrent(e.key);
  };

  const toggleMenu =()=>{
    setShowMenu(!showMenu)
  }

  const hideMenu =()=>{
    setShowMenu(false)
  }
  // const logOutUser=()=>{
  //   signOut(auth).then(() => {
  //    toast.success("Sign Out Successfully")
  //   }).catch((error) => {
  //     toast.error(error.message)
  //   });
  // }
  // monetring currently signin user
  useEffect(() => {
    // updateEmail(auth.currentUser, "user@example.com").then(() => {
    //   console.log(auth.currentUser);
    //   setCurrentEmail(auth.currentUser)
    // }).catch((error) => {
    //  setCurrentEmail("")
    // });
  }, []);
  return (
    <>
      <header>
        <div className="header">{logo}</div>
        <nav className={showMenu ? `${"show-nav"}`: `${"hide-nav"}`}>
          <div className={showMenu ? `${"nav-wrapper"} ${"show-nav-wrapper"}`:`${"nav-wrapper"}`} onClick={hideMenu}>
          </div>
          <ul onClick={hideMenu}>
            <li className="logo-mobile">
             {logo}
             <FaTimes size={22} color="#fff" onClick={hideMenu}/>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
          <div className="header-right"onClick={hideMenu}>
            <span className="links">
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/order-history">My Order</NavLink>
            </span>
            <span className="cart">
              <NavLink to="/cart">{cart}</NavLink>
            </span>
          </div>
          
        </nav>
        <div className="menu-icon">
          {cart}
          <HiOutlineMenu size={28} onClick={toggleMenu}/>
        </div>
      </header>
    </>
  );
};
