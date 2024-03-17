import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";

import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { ProductItem } from "../ProductItem/ProductItem";
import Search from "../../Search/Search";
import { showAverage } from "../../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, setDrawerVisible } from "../../../redux/cart/Action";

const { Meta } = Card;

export const ProductList = ({ product }) => {
  const { images, title, description, slug } = product;
  const [tooltip, setTooltip] = useState("Click to add");

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage

      localStorage.setItem("cart", JSON.stringify(unique));
      // add to redux state
      dispatch(addToCart(unique));
      // show tooltip
      setTooltip("Added");
      dispatch(setDrawerVisible(true));
    }
  };
  return (
    // <div>
    //   <div>
    //     <div>
    //       <BsFillGridFill size={22} color="orangered" />
    //       <FaListAlt size={24} color="#0066d4" />
    //       <p>
    //         <b>5</b> Products found.
    //       </p>
    //     </div>
    //     {/* Search Icon */}
    //     <div>
    //       <Search />
    //     </div>
    //     <div>
    //       <label>Sort by:</label>
    //       <select>
    //         <option value="latest">Latest</option>
    //         <option value="lowest-price">Lowest Price</option>
    //         <option value="highest-price">Highest Price</option>
    //         <option value="a-z">A - Z</option>
    //         <option value="z-a">Z - A</option>
    //       </select>
    //     </div>
    //     <div>
    //       <div>{product.title}</div>
    //       {/* <ProductItem/> */}
    //     </div>
    //   </div>
    // </div>
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">No rating yet</div>
      )}
      <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1"
            alt="coverimg"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
          <Tooltip title={tooltip}>
            <ShoppingCartOutlined
              className="text-danger"
              onClick={handleAddToCart}
              disabled={product.quantity < 1}
            />{" "}
            <br /> {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
          </Tooltip>,
        ]}
      >
        <Meta
          title={title}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card>
    </>
  );
};
