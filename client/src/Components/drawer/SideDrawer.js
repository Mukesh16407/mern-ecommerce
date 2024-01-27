import React from "react";
import { Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Laptop from "../images/laptop.png";
import { setDrawerVisible } from "../../redux/cart/Action";

export const SideDrawer = () => {
  const dispatch = useDispatch();
  const { drawer, cart } = useSelector((state) => ({ ...state }));

  const imageStyle = {
    width: "100%",
    height: "50px",
    objectFit: "cover",
  };
  return (
    <Drawer
      className="text-centre"
      placement="right"
      closable={false}
      onClose={() => dispatch(setDrawerVisible(false))}
      visible={drawer}
    >
      {cart.map((p) => (
        <div key={p._id} className="row">
          <div className="col">
            {p.images[0] ? (
              <>
                <img src={p.images[0].url} style={imageStyle} alt="img" />
                <p className="text-center bg-secondary text-light">
                  {p.title} x {p.count}
                </p>
              </>
            ) : (
              <>
                <img src={Laptop} style={imageStyle} alt="defaltimg" />
                <p className="text-center bg-secondary text-light">
                  {p.title} x {p.count}
                </p>
              </>
            )}
          </div>
        </div>
      ))}
      <Link to="/cart">
        <button
          onClick={() => dispatch(setDrawerVisible(false))}
          className="text-center btn btn-primary btn-raised btn-block"
        >
          Go To Cart
        </button>
      </Link>
    </Drawer>
  );
};
