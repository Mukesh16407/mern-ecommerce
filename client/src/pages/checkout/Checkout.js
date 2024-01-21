import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  emptyUserCart,
  getUserCart,
  saveUserAddress,
} from "../../functions/user";
import { addToCart } from "../../redux/cart/Action";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./checkout.css";

const Checkout = () => {
  const quillStyles = {
    ".ql-editor p": {
      color: "black",
      textAlign: "left",
    },
  };

  const { user } = useSelector((state) => state.auth);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const dispatch = useDispatch();

  console.log(user, "user");

  useEffect(() => {
    getUserCart(user?.token).then((res) => {
      console.log("user cart res", JSON.stringify(res.data, null, 4));
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
    });
  }, []);
  const saveAddressToDb = () => {
    // console.log(address);
    saveUserAddress(user.token, address).then((res) => {
      if (res.data.ok) {
        setAddressSaved(true);
        toast.success("Address saved");
      }
    });
  };
  const emptyCart = () => {
    // remove from local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove from redux
    const payload = [];
    dispatch(addToCart(payload));
    // remove from backend
    emptyUserCart(user.token).then((res) => {
      setProducts([]);
      setTotal(0);
      toast.success("Cart is emapty. Contniue shopping.");
    });
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h4>Delivery Address</h4>
        <br />
        <br />
        <ReactQuill
          theme="snow"
          value={address}
          onChange={setAddress}
          className="custom-quill"
        />
        <button className="btn btn-primary mt-2" onClick={saveAddressToDb}>
          Save
        </button>
        <hr />
        <h4>Got Coupon?</h4>
        <br />
        coupon input and apply button
      </div>

      <div className="col-md-6">
        <h4>Order Summary</h4>
        <hr />
        <p style={{ color: "black", textAlign: "left" }}>
          Products {products.length}
        </p>
        <hr />
        {products.map((p, i) => (
          <div key={i}>
            <p style={{ color: "black", textAlign: "left" }}>
              {p.product.title} ({p.color}) x {p.count} ={" "}
              {p.product.price * p.count}
            </p>
          </div>
        ))}
        <hr />
        <p style={{ color: "black", textAlign: "left" }}>Cart Total: {total}</p>

        <div className="row">
          <div className="col-md-6">
            <button
              className="btn btn-primary"
              disabled={!addressSaved || !products.length}
            >
              Place Order
            </button>
          </div>

          <div className="col-md-6">
            <button
              disabled={!products.length}
              onClick={emptyCart}
              className="btn btn-primary"
            >
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
