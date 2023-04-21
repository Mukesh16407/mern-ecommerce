import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link, } from "react-router-dom";
import { ShowOnLogin, ShowOnLogout } from "../hiddenLink/HiddenLinks";
import { loginUser } from "../../redux/action/userAction";

import {
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  {
    label: <Link to='/'>Home</Link>,
    key: "home",
    
    icon: <HomeOutlined />,
  },
  {
    label: <Link to='/register'>Register</Link>,
    key: "register",
    icon: <UserAddOutlined />,
  },
  {
    label:<Link to='/login'>Login</Link>,
    key: "login",
  
    icon: <UserOutlined />,
  },
 
  {
    label: "Username",
    key: "userName",

    icon: <SettingOutlined />,
    children: [
      {
        type: "group",

        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
    ],
  },
];

export const Header = () => {
  const [current, setCurrent] = useState("");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [showMenu, setShowMenu] = useState(false);
  // const [displayName, setdisplayName] = useState("");

  // // monetring currently signin user
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       //console.log(user)
  //       const uid = user.uid;

  //       if (user.displayName === null) {
  //         const u1 = user.email.slice(0, -10);
  //         //const u1 = user.email.substring(0,user.email.indexOf("@"))
  //         const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
  //         setdisplayName(uName);
  //       } else {
  //         setdisplayName(user.displayName);
  //       }

  //       dispatch(
  //         loginUser({
  //           email: user.email,
  //           userName: user.displayName ? user.displayName : displayName,
  //           userID: uid,
  //         })
  //       );
  //     } else {
  //       setdisplayName("");
  //       dispatch(logOutUser());
  //     }
  //   });
  // }, [dispatch, displayName]);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  // const hideMenu = () => {
  //   setShowMenu(false);
  // };
  // const logOutUser = () => {
  //   signOut(auth)
  //     .then(() => {
  //       toast.success("Sign Out Successfully");
  //       navigate("/register");
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //     });
  // };

  return (
    <>
    
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        
        items={items}
      />
    </>
  );
};
