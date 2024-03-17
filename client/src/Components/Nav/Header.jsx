import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postCurrentUser } from "../../functions/auth";
import { setActiveUser } from "../../redux/auth/Action";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu, Badge } from "antd";
import Search from "../form/Search";

const { SubMenu, Item } = Menu;

export const Header = () => {
  const [current, setCurrent] = useState("");

  const currentUser = useSelector((state) => state.auth.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let { cart } = useSelector((state) => ({ ...state }));
  //const [displayName, setdisplayName] = useState("");

  const handleClick = (e) => {
    if (e.key === "logout") {
      handleLogout();
    } else {
      setCurrent(e.key);
    }
  };

  // monetring currently signin user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        user
          .getIdToken(/* forceRefresh */ true)
          .then((idToken) => postCurrentUser(idToken))
          .then((res) => {
            const getUserData = {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
            };

            dispatch(setActiveUser(getUserData));
          })
          .catch((error) => console.log("error", error));
      }
    });

    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  // onAuthStateChanged(auth, (user) => {
  //  if (user) {
  //   if (user.displayName === null) {
  //     const u1 = user.email.slice(0, -10);
  //     //const u1 = user.email.substring(0,user.email.indexOf("@"))
  //     const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
  //     setdisplayName(uName);
  //   } else {
  //     setdisplayName(user.displayName);
  //   }
  // } else {
  //   setdisplayName("");
  //   dispatch(removeActiveUser());
  // }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign Out Successfully");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<AppstoreOutlined />}>
          <Link to="/">Home</Link>
        </Item>
        <Item key="shop" icon={<ShoppingOutlined />}>
          <Link to="/shop">Shop</Link>
        </Item>
        <Item key="cart" icon={<ShoppingCartOutlined />}>
          <Link to="/cart">
            <Badge count={cart.length} offset={[9, 0]}>
              Cart
            </Badge>
          </Link>
        </Item>

        {!currentUser && (
          <Item
            key="register"
            icon={<UserAddOutlined />}
            className="float-right"
          >
            <Link to="/register">Register</Link>
          </Item>
        )}

        {!currentUser && (
          <Item key="login" icon={<UserOutlined />} className="float-right">
            <Link to="/login">Login</Link>
          </Item>
        )}

        {currentUser && (
          <SubMenu
            icon={<SettingOutlined />}
            title={currentUser.email && currentUser.email.split("@")[0]}
            className="float-right"
          >
            {currentUser && currentUser.role === "subscriber" && (
              <Item>
                <Link to="/user/history">Dashboard</Link>
              </Item>
            )}

            {currentUser && currentUser.role === "admin" && (
              <Item>
                <Link to="/admin/dashboard">Dashboard</Link>
              </Item>
            )}

            <Item icon={<LogoutOutlined />} onClick={handleLogout}>
              Logout
            </Item>
          </SubMenu>
        )}
        <span className="float-right p-1">
          <Search />
        </span>
      </Menu>
    </>
  );
};
